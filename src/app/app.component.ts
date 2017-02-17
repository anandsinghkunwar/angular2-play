import { Component } from '@angular/core';
import { TestComponent } from './test.component';

@Component({
    selector: 'my-app',
    // entryComponents: [ TestComponent ],
    template: `<h1>{{test}} {{name}}</h1><test-component></test-component>`,
})
export class AppComponent  {
    test: string = "Hello";
    name: string = "Anand";
    // testComponent: TestComponent;
}
