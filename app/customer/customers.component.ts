import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
  @Input() styleColor:string;
  
  customers: Observable<any[]>;
  
  constructor(private _customerService:CustomerService) { }
 
  ngOnInit() {
    this.customers = this._customerService.getCustomers()//.subscribe((value)=> this.customers = value);
      .catch(err => {
        console.log(err);
        return Observable.of({} as any);
      })
  }
}