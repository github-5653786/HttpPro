import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: Http) { }

  callBike(a: string) {
    var headers = new Headers({ 'Content-Type': 'application/json' });
    let _url2: string = 'https://direct-prod-directportal.godigit.com/DirectPortal/bike/variant/match/make_model/' + a;
    return this.http.get(_url2, { headers });
  }

  posts(data: any) {
    return this.http.post('https://direct-prod-directportal.godigit.com/DirectPortal/bike/variant/match/characteristics', data);
  }

  GetCode(flow: any) {
    return this.http.get('https://direct-prod-directportal.godigit.com/DirectPortal/cities/rtocode/region?regionCode=ka' + flow);
  }

  GenerateOTP(Num: any) {
    return this.http.get('https://direct-prod-directportal.godigit.com/DirectPortal/generate/otp/' + Num);
  }

  ValidateOTP(Otp) {
    return this.http.get('https://direct-prod-directportal.godigit.com/DirectPortal/validate/otp/' + Otp)
  }
}
