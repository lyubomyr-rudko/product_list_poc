import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title = 'Super!!!';
    word = 'Cool!';
    styleColor = 'blue';
    
    constructor() {
        setTimeout(()=> {
            this.styleColor = 'red';
        }, 1000);
    }
    
    doIt() {
        this.styleColor = 'silver';
    }
}
