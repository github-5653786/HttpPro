import { MyserviceService } from './myservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bike = [];
  comman = [];
  varient = [];

  Code = '';
  constructor(private ser: MyserviceService) { }
  selectBrand(e) {
    this.ser.callBike(e).subscribe(data => {
      let d = data.json();
      this.comman = d;
      this.bike = [];
      for (let index = 0; index < this.comman.length; index++) {
        this.comman[index].concat = this.comman[index].concat.toUpperCase();
        this.bike.push(this.comman[index].concat);
      }
    });
    // if(this.bike.length ===0){
    //   (document.getElementById("brand") as HTMLInputElement).value = ''
    // }
  }

  bikeBrandSelect(el) {
    let requestData;
    this.comman.forEach(element => {
      if (element.concat === el.value) {
        requestData = element;
        let req = {
          make: requestData.make,
          model: requestData.model
        }
        this.ser.posts(req).subscribe(data => {
          let FinalVal = data.json();
          FinalVal = JSON.parse(FinalVal);
          this.varient = [];
          document.getElementById("varient").focus();
          for (let i = 0; i < FinalVal.length; i++) {
            this.varient.push(FinalVal[i].new.toUpperCase())
          }
        })
      }
    });

  }

  autofocus() {
    (document.getElementById("varient") as HTMLInputElement).value = '';
    let a = (document.getElementById("brand") as HTMLInputElement).value;
    if (a == '') {
      document.getElementById("brand").focus();
      this.varient = [];
    }
  }

  dobWithSlash(event: any) {
    let dateValue = event.target.value;
    dateValue = dateValue.trim();
    let finalvalue = dateValue.split('/').join(''); // remove slashes
    let output = finalvalue;

    if (finalvalue.length === 1) {
      const day = Number(finalvalue);
      if (day > 3) {
        finalvalue = '0' + finalvalue;
      }
    }
    if (event.keyCode !== 8 && event.keyCode !== 37 && event.keyCode !== 38 && event.keyCode !== 39 &&
      event.keyCode !== 40 && finalvalue.length < 5) {
      if (finalvalue.length === 3) {
        const month = Number(finalvalue.charAt(2));
        if (month > 1) {
          finalvalue = [finalvalue.slice(0, 2), '0', finalvalue.slice(2)].join('');
        }
      }
      if (finalvalue.length > 1) {
        output = finalvalue = [finalvalue.slice(0, 2), '/', finalvalue.slice(2)].join('');
      }
      if (finalvalue.length > 4) {
        output = [finalvalue.slice(0, 5), '/', finalvalue.slice(5)].join('');
      }
      event.target.value = output;
    }
  }

  SendData(e: any) {
    var finalval = this.Code.toString();
    finalval = finalval.slice(2, 4);
    if (finalval != '' && finalval <= '70') {
      this.ser.GetCode(finalval).subscribe((d) => {
        let data = d.json();
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
          alert("City : " + data[i].registeredCityName + " State : " + data[i].registeredStateName);
          this.Code = '';
        }
      })
    } else {
      alert("Enter a valid code...!");
    }
  }
  go(e) {
    if (e.keyCode == 13) {
      document.getElementById("btn").click();
    }
  }

  AddSlash(event) {
    var val = event.target.value;
    val = val.trim();
    var output = val.split('-').join('');

    if (output.length === 1) {
      let day = Number(output);
      if (day > 3)
        output = '0' + output;
    }
    if (event.keyCode != 8 && output.length < 5 && event.keyCode != 46) {
      if (output.length === 3) {
        const monthNum = output.slice(2, 3);
        if (monthNum > 1) {
          output = [output.slice(0, 2), '0', output.slice(2)].join('');
        }
      }
      if (output.length > 1) {
        output = [output.slice(0, 2), '-', output.slice(2)].join('');
      }
      if (output.length > 4) {
        output = [output.slice(0, 5), '-', output.slice(5)].join('');
      }
      event.target.value = output;
    }
  }
}

