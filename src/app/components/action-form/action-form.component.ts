import { Component, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { audit } from 'rxjs/operators';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent {
  @Output() formSubmitted = new EventEmitter<Course>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),

    author: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    })
  });

  get authorGroup(): FormGroup {
    return this.form.get('author') as FormGroup;
  }

  submitForm(): void {
    this.formSubmitted.emit(this.form.value);
  }
}
