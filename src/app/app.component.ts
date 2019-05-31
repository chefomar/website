import { Component } from '@angular/core';
import { educationCards, experienceCards, projectCards } from './models/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omar';
  readonly education = educationCards;
  readonly experience = experienceCards;
  readonly projects = projectCards;
}
