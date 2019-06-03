import { Injectable } from '@angular/core';
import { SpyTargetDirective } from './spy-target.directive';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {

  private stopSpying$ = new Subject();
  private activeSpyTarget$ = new Subject<string>();
  private scrollEvent = fromEvent(window, 'scroll', { passive: true }).pipe(auditTime(10), takeUntil(this.stopSpying$));
  private resizeEvent = fromEvent(window, 'resize', { passive: true }).pipe(auditTime(300), takeUntil(this.stopSpying$));
  private spyTargets: SpyTargetDirective[] = [];

  constructor() { }

  spy(spyTargets: SpyTargetDirective[]) {
    if (this.spyTargets.length === 0 && spyTargets && spyTargets.length > 0) {
      this.spyTargets = spyTargets;

      this.scrollEvent.subscribe(() => this.handleEvents());
      this.resizeEvent.subscribe(() => this.handleEvents());

      this.handleEvents();

      return this.activeSpyTarget$.asObservable();
    }
  }

  handleEvents() {
    for (const target of this.spyTargets) {
      if (this.isElementActive(target)) {
        this.activeSpyTarget$.next(target.appSpyTarget);
      }
    }
  }

  isElementActive(spyTarget: SpyTargetDirective) {
    const targetOffsetTop = spyTarget.offsetTop;
    const targetHeight = spyTarget.height;
    const scrollTop = this.scrollTop;
    const viewportHeight = this.viewportHeight;

    return targetOffsetTop + targetHeight >= scrollTop && targetOffsetTop <= scrollTop + viewportHeight;
  }

  get scrollTop() {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }

  get viewportHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  get activeSpyTarget() {
    return this.activeSpyTarget$.asObservable();
  }

  stopSpying() {
    this.activeSpyTarget$.complete();
    this.stopSpying$.next();
    this.spyTargets = [];
  }
}
