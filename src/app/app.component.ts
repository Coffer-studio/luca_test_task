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

  selectedCourse = null;

  constructor(
    private readonly dataService:DataService
  ) {}

  selectCourse(data: Course): void {
    this.selectedCourse = data as any;
  }

  applyAction(data: Course): void {
    if (!data.id) {
      this.dataService.createCourse(data).then(() => alert('New cource added'));
    } else {
      this.dataService.updateCourse(data.id, data).then(() => alert('Selected cource updated'));
    }
  }
}
