import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';

@Directive({
  selector: '[appSpyOn]'
})
export class SpyOnDirective implements OnInit {

  @Input() activeClass: string;
  @Input() appSpyOn: string;
  private isActive = false;

  constructor(private el: ElementRef, private renderer: Renderer2, private spyService: ScrollSpyService) { }

  ngOnInit() {
    this.spyService.activeSpyTarget.subscribe(
      (targetName) => {
        if (!this.isActive && targetName === this.appSpyOn) {
          this.setActive();
        } else if (this.isActive && targetName !== this.appSpyOn) {
          this.setInActive();
        }
      }
    );
  }

  private get htmlElement() {
    return this.el.nativeElement;
  }

  setActive() {
    this.isActive = true;
    if (this.activeClass) {
      this.renderer.addClass(this.htmlElement, this.activeClass);
    }
  }

  setInActive() {
    this.isActive = false;
    if (this.activeClass) {
      this.renderer.removeClass(this.htmlElement, this.activeClass);
    }
  }
}
