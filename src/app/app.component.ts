import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular playground</h1>

    <p *ngCustomFor="let item from items; let customIndex = index">
      item: {{ item }}, index: {{ customIndex }}
    </p>

  `
})
export class AppComponent {

  items = ['a', 'b', 'c'];

}
