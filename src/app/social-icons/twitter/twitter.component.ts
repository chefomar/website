import { Component, OnInit } from '@angular/core';
import { SocialIcon } from '../social-icon';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.svg',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent extends SocialIcon implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
