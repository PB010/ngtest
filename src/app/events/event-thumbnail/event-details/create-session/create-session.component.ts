import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ISession} from "../../../../shared/models/events/ievent.model";
import {restrictedWords} from "../../../../shared/validators/create-session.validator";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sessionForm = this.formBuilder.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required,
        Validators.maxLength(400), restrictedWords(['foo', 'bar'])]]
    })
  }

  saveSession(formValue) {
    let session: ISession = {
      id: 0,
      name: formValue.name,
      duration: +formValue.duration,
      presenter: formValue.presenter,
      level: formValue.level,
      abstract: formValue.abstract,
      voters: []
    }

    this.saveNewSession.emit(session);
  }

  validateInput(formControl: string): boolean {
    if (this.sessionForm.controls[formControl].invalid &&
        this.sessionForm.controls[formControl].dirty)
      return true;

    return false;
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
