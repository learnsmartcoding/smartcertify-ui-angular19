import { Component, Input, input, OnInit } from '@angular/core';
import { UserModel } from '../../../models/usermodel';
import { UserProfileService } from '../../../services/user-profile.service';
import { CurrentUserService } from '../../../services/current-user.service';

@Component({
  selector: 'app-view-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './view-user-profile.component.html',
  styleUrl: './view-user-profile.component.css',
})
export class ViewUserProfileComponent implements OnInit {
  @Input() userId = 0;

  user: UserModel = {
    userId: 0,
    displayName: '',
    firstName: '',
    lastName: '',
    email: '',
    adObjId: '',
    profileImageUrl: '',
    bio: '',
  };

  constructor(
    private userService: UserProfileService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.currentUserService.loadCurrentUser().subscribe((user) => {
      this.userId = user.userId;
      this.getUserProfile();
    });
  }

  getUserProfile() {
    // Fetch user data, for now using static values for demo
    this.userService.getUserProfile(this.userId).subscribe({
      next: (data) => {
        this.user = data;
        this.user.bio = this.user.bio?.replace(/\n/g, '<br>');
      },
      error: (err) => {
        console.error('Error fetching user profile', err);
      },
    });
  }
}
