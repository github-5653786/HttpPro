import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[DateOfBirth]'
})
export class DateOfBirthDirective {

  constructor(private eref: ElementRef) { }

  @HostListener('keyup', ['$event'])
  inputs(event) {
    var val = event.target.value;
    var finalVal = val.trim();
    finalVal = finalVal.split('-').join('');

    if (finalVal.length === 1) {
      let day = Number(finalVal)
      if (day > 3) {
        finalVal = '0' + finalVal;
      }
    }

    if (event.keyCode != 8 && finalVal.length < 5) {
      if (finalVal.length === 3) {
        const monthNum = finalVal.charAt(2);
        if (monthNum > 1) {
          finalVal = [finalVal.slice(0, 2), '0', finalVal.slice(2)].join('');
        }
      }
      if (finalVal.length > 1) {
        finalVal = [finalVal.slice(0, 2), '-', finalVal.slice(2)].join('');
      }
      if (finalVal.length > 4) {
        finalVal = [finalVal.slice(0, 5), '-', finalVal.slice(5)].join('');
      }
      event.target.value = finalVal;
    }
  }
}

