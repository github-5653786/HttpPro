import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[OnlyNumbers]'
})
export class CheckNumDirective {
  @Input()
  OnlyNumbers: number;
  //In this code we allowed the user to enter only numbers and only 10 number
  constructor(private el: ElementRef) { }
  @HostListener('keydown', ['$event'])
  onKeyDown(event) {
    // my own code
    const val = this.el.nativeElement.value ? this.el.nativeElement.value.length : 0;
    if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57 || event.shiftKey || val == this.OnlyNumbers)) {
      // event.preventDefault();
      return false;
    }
  }
}