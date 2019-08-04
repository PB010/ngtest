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
      firstName: [this.authService.currentUser.firstName, [Validators.required,
                  Validators.pattern('[a-zA-Z].*')]],
      lastName: [this.authService.currentUser.lastName, [Validators.required,
                  Validators.pattern('[a-zA-Z].*')]]
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

  validateInput(controlName: string): boolean {
    if (this.profileForm.controls[controlName].invalid &&
      this.profileForm.controls[controlName].touched) {
      return true;
    }
    return false;
  }
}
