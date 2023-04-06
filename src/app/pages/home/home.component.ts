import { Component } from '@angular/core';
import {DataService} from "../../services/data/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private readonly dataService: DataService
  ) {}

  courses$ = this.dataService.courses$;
}
