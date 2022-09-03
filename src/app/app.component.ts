import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  template: ` <h1>Angular playground</h1> `,
})
export class AppComponent implements OnInit {
  constructor(private testSvc: TestService) {}

  ngOnInit(): void {
    this.testSvc.willError().subscribe(console.log);
    this.testSvc.willNotError().subscribe(console.log);
  }
}
