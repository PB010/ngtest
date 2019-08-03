import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName,
      formValues.password);
  }

  redirectToEvents() {
    this.router.navigate(['events']);
  }
}
