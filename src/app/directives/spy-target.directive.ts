import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ScrollSpyService } from '../services/scroll-spy.service';

@Directive({
  selector: '[appSpyTarget]'
})
export class SpyTargetDirective implements OnInit {

  @Input() readonly appSpyTarget: string;

  constructor(private el: ElementRef, private spyService: ScrollSpyService, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.htmlElement, 'id', this.appSpyTarget);
    this.spyService.addTarget(this);
  }

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
