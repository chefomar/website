import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omar';
  isDarkTheme = true;

  get theme () {
    return this.isDarkTheme ? 'dark-theme' : 'light-theme';
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
