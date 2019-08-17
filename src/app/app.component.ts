import { Component, AfterViewInit } from '@angular/core';
import { ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private spyService: ScrollSpyService) {}

  ngAfterViewInit() {
    this.spyService.spy({ thresholdBottom: 45 });
  }
}
