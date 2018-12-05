import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPrefrencesService {

  constructor() { }

  saveThemePrefrence(isDarkTheme: boolean) {
    localStorage.setItem('DARK_THEME', isDarkTheme.toString());
  }

  getThemePrefrence() {
    return localStorage.getItem('DARK_THEME') !== 'false';
  }
}
