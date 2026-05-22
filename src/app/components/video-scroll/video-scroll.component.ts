import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Video, VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-scroll',
  imports: [FormsModule, CommonModule],
  templateUrl: './video-scroll.component.html',
  styleUrl: './video-scroll.component.css',
})
export class VideoScrollComponent implements OnInit, OnChanges {
  referenceVideos: Video[] = [];
  @Input() courseTopic: string = '';
  @Input() questionText: string = '';

  constructor(private videoService: VideoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadVideos();
  }

  ngOnInit() {
    this.loadVideos();
  }

  private loadVideos(): void {
    this.referenceVideos = this.videoService.getVideosByQuestion(
      this.questionText,
      this.courseTopic
    );
  }

  // Extract YouTube video ID and generate thumbnail URL
  getThumbnail(url: string): string {
    const videoId = this.extractVideoId(url);
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  }

  // Helper function to extract video ID from URL
  extractVideoId(url: string): string | null {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  }

  // Open video in a new tab
  openVideo(url: string): void {
    window.open(url, '_blank');
  }
}
