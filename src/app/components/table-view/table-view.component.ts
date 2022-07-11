import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  @Input() courses: Course[] | null = [];

  @Output() selected = new EventEmitter<Course>();

  editRecord(data: Course) {
    this.selected.emit(data);
  }
}
