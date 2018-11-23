import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() themeChanged = new EventEmitter();

  title = '!!!';

  constructor() { }

  ngOnInit() {
  }

  changeTheme() {
    this.themeChanged.emit();
  }
}
