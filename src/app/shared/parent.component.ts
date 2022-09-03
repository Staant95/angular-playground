import { Component, OnInit, SkipSelf } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      Parent uses the logger service from the SharedModule because it uses @SkipSelf in the costructor to skip locally provided LoggerService
    </p>
    <button (click)="logger.log('From parent')">Log from parent</button>

    <app-child></app-child>

  `,
  styles: [
    `
      :host {
        display: block;
        outline: 1px dashed #000;
        padding: 2rem;
      }
    `
  ],
  providers: [{
    provide: LoggerService,
    useFactory: () => {
      return {
        log: (message: string) => {
        console.log(
          '%c[PROVIDED BY PARENT]',
          'background: #242424; color: #eb4034',
          message
        )
      }}
    }
  }]
})
export class ParentComponent implements OnInit {

  // Skip injector defined in the component
  constructor(@SkipSelf() public logger: LoggerService) { }

  ngOnInit(): void {
  }

}
