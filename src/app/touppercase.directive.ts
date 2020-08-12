import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[toUpperCase]'
})
export class TouppercaseDirective {

  constructor(private el: ElementRef) { }
  @HostListener('keyup', ['$event'])
  input(event) {
    var val = this.el.nativeElement.value;
    this.el.nativeElement.value = val.toUpperCase();
  }

}
