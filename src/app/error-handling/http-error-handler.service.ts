import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Options, OPTIONS } from './error-handling.module';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerService implements HttpInterceptor {

  constructor(@Inject(OPTIONS) private moduleOptions: Options) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpResponse<any>) => {
        const message = this.moduleOptions.errorMap.get(error.status);

        if (message) {
          // handle it however you want
          console.error(`Error: ${message}`);
        }

        return of(error);
      })
    );
  }
}
