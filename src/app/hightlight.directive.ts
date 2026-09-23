import { Directive ,ElementRef,HostListener} from '@angular/core';


@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.border = '2px solid blue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
    this.element.nativeElement.style.border = '';
  }

}
