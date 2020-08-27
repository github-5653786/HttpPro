import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[DateOfBirth]'
})
export class DateOfBirthDirective {

  constructor(private eref: ElementRef) { }

  @HostListener('keyup', ['$event'])
  addSlash(event) {
    var val = event.target.value;

    if (val.length === 1) {
      let day = Number(val);
      if (day > 3) {
        val = '0' + val;
      }
    }
    if (event.keyCode != 8) {
      if (val.length > 2) {
        let month = val.charAt(3)
        if (month > 1) {
          val = [val.slice(0, 3), '0', val.slice(3)].join('');
        }
      }

      if (val.length === 2) {
        val = [val.slice(0, 2), '-', val.slice(2)].join('');
      }

      if (val.length === 5) {
        val = [val.slice(0, 5), '-', val.slice(5)].join('');
      }
      event.target.value = val
    }
  }
}

