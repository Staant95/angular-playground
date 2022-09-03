import {
  InjectionToken,
  ModuleWithProviders,
  NgModule,
  Type,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Options {
  errorMap: Map<number, unknown>;
  // maybe pass a component to use as a dialog to display the errors
  dialog?: Type<unknown>;
}

export const OPTIONS = new InjectionToken<Options>('Options');

const defaultErrorMap = new Map<number, unknown>([[400, 'Bad Request']]);

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: OPTIONS,
      useValue: {
        errorMap: defaultErrorMap,
      },
    },
  ],
})
export class ErrorHandlingModule {
  static forRoot(options: Options): ModuleWithProviders<ErrorHandlingModule> {
    return {
      ngModule: ErrorHandlingModule,
      providers: [{ provide: OPTIONS, useValue: options }],
    };
  }
}
