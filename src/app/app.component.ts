import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { SpyTargetDirective } from './spy-target.directive';
import { ScrollSpyService } from './scroll-spy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(SpyTargetDirective) private spyTargets: QueryList<SpyTargetDirective>;

  constructor(private spyService: ScrollSpyService) {}

  ngAfterViewInit() {
    this.spyService.spy(this.spyTargets.toArray());
  }
}
