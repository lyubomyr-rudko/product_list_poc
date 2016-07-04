import { Component } from '@angular/core';
import { CustomersComponent } from './customer/customers.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomersComponent]
})
export class AppComponent { 
    title = 'Super!!!';
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
