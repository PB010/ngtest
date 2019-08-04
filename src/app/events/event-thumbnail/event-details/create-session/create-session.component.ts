import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sessionForm = this.formBuilder.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: [null, Validators.required],
      level: [null, Validators.required],
      abstract: ['', [Validators.required,
        Validators.maxLength(400)]]
    })
  }

}
