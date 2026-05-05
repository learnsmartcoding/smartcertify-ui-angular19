import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserProfileService } from '../../../services/user-profile.service';
import { CurrentUserService } from '../../../services/current-user.service';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css',
})
export class UpdateProfileComponent implements OnInit {
  profileForm: FormGroup;
  selectedFile!: File;
  previewUrl: string | ArrayBuffer | null = null;
  isInstructor = false;
  userProfileId = 0;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private currentUserService: CurrentUserService,
    private toastrService: ToastrService,
    private router:Router,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // Initialize form with bio control, conditionally required
    this.profileForm = this.fb.group({
      bio: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    this.currentUserService.loadIfAuthenticated().subscribe((user) => {
      this.ngZone.run(() => {
      if (!user) {
      this.router.navigateByUrl('/home');
      return;
    }

      this.userProfileId = user.userId;
 
    if (this.isInstructor) {
      this.profileForm.get('bio')?.enable(); // Enable bio if instructor
    } else {
      this.profileForm.get('bio')?.clearValidators(); // Clear bio validators if not instructor
      this.profileForm.get('bio')?.updateValueAndValidity();
    }

    // Fetch user profile data on component load
    this.userProfileService.getUserProfile(this.userProfileId).subscribe(
      (response) => {
        this.ngZone.run(() => {
        this.profileForm.patchValue({
          bio: response.bio || '', // Pre-fill bio if available
        });
        if (response.profileImageUrl) {
          this.previewUrl = response.profileImageUrl;
        }
        this.changeDetectorRef.detectChanges();
        });
      },
      (error) => {
        this.toastrService.error('Error fetching user profile');
      }
    );
      });
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    // Preview the image
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewUrl = e.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    const formData = new FormData();    
    formData.append('userId', this.currentUserService.userId.toString());
    formData.append('picture', this.selectedFile);

    this.userProfileService.updateProfile(formData).subscribe(
      (response) => {
        this.toastrService.success('Profile updated successfully');
      },
      (error) => {
        this.toastrService.error('Error updating profile');
      }
    );
    if (this.profileForm.valid) {
  
    }
  }
}
