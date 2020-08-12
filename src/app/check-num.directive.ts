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
    let e = <KeyboardEvent>event;
    const val = this.el.nativeElement.value ? this.el.nativeElement.value.length : 0;
    if (e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57 || e.shiftKey || val == this.OnlyNumbers)) {
      e.preventDefault();
    }
  }
}