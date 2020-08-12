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
          let dd = data.json();
          dd = JSON.parse(dd);
          this.varient = [];
          document.getElementById("varient").focus();
          for (let i = 0; i < dd.length; i++) {
            this.varient.push(dd[i].new.toUpperCase())
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
}
