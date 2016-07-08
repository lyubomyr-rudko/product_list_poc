import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; // add map and many other methods to response
// import 'rxjs/add/operator/map'; // add map method to response

@Injectable()
export class CustomerService {  
  private _customersUrl = '/app/customers.json';
  constructor(private _http:Http){}
  
  getCustomers():Observable<any[]> {
    return this._http.get(this._customersUrl)
      .map((res:Response) => res.json())
      .catch(this._onError);
  }
  
  private _onError(err:any) {
    console.log(err);
    return Observable.throw(err);
  }

}