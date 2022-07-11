import { Component, Output, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { audit } from 'rxjs/operators';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.scss']
})
export class ActionFormComponent implements OnChanges, OnInit {
  @Input() course: Course | null = null;

  @Output() submitted = new EventEmitter<Course>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),

    author: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    })
  });

  ngOnChanges(changes: SimpleChanges): void {
    const courseData = changes.course.currentValue;

    if (this.form && courseData) {
      this.form?.setValue(courseData);
    }
  }

  ngOnInit(): void {
  }

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get authorGroup(): FormGroup {
    return this.form.get('author') as FormGroup;
  }

  submitForm(): void {
    this.submitted.emit({
      id: this.course?.id || null,
      ...this.form.value,
    });
  }
}
