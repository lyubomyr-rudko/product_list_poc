import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-customer',
  templateUrl: 'customer.component.html'
  // templateUrl: '/app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit {
  @Input() customer: {id: number, name: string};
  @Input() styleColor = 'Black'; 
  constructor() { }

  ngOnInit() { }

}