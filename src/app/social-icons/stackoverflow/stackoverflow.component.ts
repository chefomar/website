import { Component, OnInit } from '@angular/core';
import { SocialIcon } from '../social-icon';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.svg',
  styleUrls: ['./stackoverflow.component.scss']
})
export class StackoverflowComponent extends SocialIcon implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
