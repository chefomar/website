import { Component, OnInit } from '@angular/core';
import { education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  readonly educationData = education;

  constructor() { }

  ngOnInit() {
  }

}
