import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: [this.authService.currentUser.firstName, Validators.required],
      lastName: [this.authService.currentUser.lastName, Validators.required]
    })
  }

  redirectToEvents() {
    this.router.navigate(['events']);
  }

  saveProfile() {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(this.profileForm.controls['firstName'].value,
        this.profileForm.controls['lastName'].value);
    }
  }
}
