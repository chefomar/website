import { Component, OnInit } from '@angular/core';
import { UserPrefrencesService } from './user-prefrences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'omar';
  isDarkTheme = true;

  constructor(private userPrefremcesService: UserPrefrencesService) {}

  ngOnInit() {
    this.isDarkTheme = this.userPrefremcesService.getThemePrefrence();
  }

  get theme () {
    return this.isDarkTheme ? 'dark-theme' : 'light-theme';
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.userPrefremcesService.saveThemePrefrence(this.isDarkTheme);
  }
}
