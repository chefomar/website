import { Component, OnInit } from '@angular/core';
import { experience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  readonly experienceData = experience;

  constructor() { }

  ngOnInit() {
  }

}
