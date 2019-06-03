import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSpyTarget]'
})
export class SpyTargetDirective {

  @Input() readonly appSpyTarget: string;

  constructor(private el: ElementRef) { }

  private get htmlElement() {
    return this.el.nativeElement;
  }

  get offsetTop() {
    return this.htmlElement.offsetTop;
  }

  get height() {
    return this.htmlElement.offsetHeight;
  }
}
