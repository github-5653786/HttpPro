import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: Http) { }

  callBike(a: string) {
    let _url2: string = "https://direct-prod-directportal.godigit.com/DirectPortal/bike/variant/match/make_model/" + a;
    return this.http.get(_url2);
  }

  posts(data: any) {
    return this.http.post('https://direct-prod-directportal.godigit.com/DirectPortal/bike/variant/match/characteristics', data);
  }

  GetCode(flow: any) {
    return this.http.get('https://direct-prod-directportal.godigit.com/DirectPortal/cities/rtocode/region?regionCode=ka' + flow);
  }
}
