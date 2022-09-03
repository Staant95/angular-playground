import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { HttpErrorHandlerService } from './error-handling/http-error-handler.service';

export const errorMap = new Map<number, unknown>([
  [400, 'Bad Request'],
  [401, 'Unauthorized'],
  [404, 'Sorry we could not find what you were looking for'],
  // ...
]);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ErrorHandlingModule.forRoot({
      errorMap: errorMap,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlerService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
