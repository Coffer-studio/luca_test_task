import { Component } from '@angular/core';
import { Course } from './models/course.model';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses$ = this.dataService.courses$;

  isFormVisible = false;

  constructor(
    private readonly dataService:DataService
  ) {}

  addNewCourse(data: Course): void {
    this.dataService.createCourse(data)
      .then(() => alert('New cource added'));
  }
}
