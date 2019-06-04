import { Component, OnInit } from '@angular/core';
import { SocialIcon } from '../social-icon';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.svg',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent extends SocialIcon implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
