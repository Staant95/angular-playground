import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { LoggerService } from '../logger.service';

const components = [
  ParentComponent,
  ChildComponent,
]

@NgModule({
  declarations: [
    ...components
  ],
  exports: [...components],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: LoggerService,
      useFactory: () => {
        return {
          log: (message: string) => {
            console.log(
              '%c[PROVIDED BY SHARED MODULE]',
              'background: #242424; color: #f5ec42',
              message
            )
          }
        }
      }
    }
  ]
})
export class SharedModule { }
