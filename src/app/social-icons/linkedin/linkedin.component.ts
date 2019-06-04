import { Component, OnInit } from '@angular/core';
import { SocialIcon } from '../social-icon';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.svg',
  styleUrls: ['./linkedin.component.scss']
})
export class LinkedinComponent extends SocialIcon implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
