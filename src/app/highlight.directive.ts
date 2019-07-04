import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[apHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor: string;

  constructor() { }

  @HostListener('mouseover')
  mouseOver() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseout')
  mouseOut() {
    this.bgColor = '';
  }
}
