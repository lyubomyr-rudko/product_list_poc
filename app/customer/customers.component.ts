import { Component, OnInit, Input } from '@angular/core';
import { CustomerComponent } from './customer.component';

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  directives: [CustomerComponent]
})
export class CustomersComponent implements OnInit {
  @Input() styleColor:string;
  constructor() { }
  customers = [
      {id: 1, name: 'Joe'},
      {id: 2, name: 'Bob'},
      {id: 3, name: 'Dock'},
      {id: 4, name: 'Rob'},
      {id: 5, name: 'Box'},
      {id: 6, name: 'Yuriy'}
  ]

  ngOnInit() { }

}