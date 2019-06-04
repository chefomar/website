import { Component, OnInit } from '@angular/core';
import { SocialIcon } from '../social-icon';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.svg',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent extends SocialIcon implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
