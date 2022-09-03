import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Child injects LoggerService that is provided by the ParentComponent
    </p>
    <button (click)="logger.log('From child')">Log from child</button>
  `,
  styles: [
    `
      :host {
        display: block;
        outline: 3px dashed #f5ec42;
        padding: 1rem;
        margin-top: 1rem;
      }
    `
  ]
})
export class ChildComponent implements OnInit {

  constructor(public logger: LoggerService) { }

  ngOnInit(): void {
  }

}
