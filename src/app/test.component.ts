import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  template: `<div>This is a test component by {{yo}}</div>`,
})
export class TestComponent  {
  yo = 'Anand';
}
