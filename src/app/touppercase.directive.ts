import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[toUpperCase]'
})
export class TouppercaseDirective {

  constructor(private el: ElementRef) { }
  @HostListener('keyup', ['$event'])
  input(event) {
    event.target.value = event.target.value.toUpperCase();
  }

}
