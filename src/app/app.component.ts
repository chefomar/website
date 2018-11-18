import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omar';
  classes = {
    'dark-theme': true,
    'light-theme': false
  };

  setDarkTheme() {
    this.classes = {
      'dark-theme': true,
      'light-theme': false
    };
  }

  setLightTheme() {
    this.classes = {
      'dark-theme': false,
      'light-theme': true
    };
  }
}
