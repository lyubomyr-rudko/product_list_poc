import { Component } from '@angular/core';
// import { CustomersComponent } from './customer/customers.component';
// import { CustomerService } from './customer/customer.service';
import { CustomersComponent, CustomerService } from './customer/index';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [ CustomerService ]
})
export class AppComponent { 
    title = 'Super!';
    word = 'Cool!';
    styleColor = 'yellow';
    
    constructor() {
        setTimeout(()=> {
            this.styleColor = 'green';
        }, 1000);
    }
    
    doIt() {
        this.styleColor = 'silver';
    }
    
    doItMore() {}
}
