import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Injector hierarchy</h1>

    <h2>
      The log function of the <em>LoggerService</em> is overridden in the <em>SharedModule</em> and in the <em>ParentComponent</em>.
    </h2>
    <h2>
      The <em>ChildComponent</em> uses the <em>LoggerService</em> from the <em>ParentComponent</em>, while the <em>ParentComponent</em> uses the <em>LoggerService</em> from the <em>SharedModule</em>.
    </h2>

    <br>

    <p>Open the console and click the buttons</p>

    <br>

    <app-parent></app-parent>
  `
})
export class AppComponent {
}
