import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, finalize } from 'rxjs/operators';

@Injectable()
export class RequestTimerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let startTime = (new Date()).getTime();
    let endTime = null;
    let responseTime = null;
    return next.handle(request)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            endTime = (new Date()).getTime();
            responseTime = `Request ${event?.url} succeded in ${endTime - startTime} milli seconds`;
          }
        }),
        catchError((error: HttpErrorResponse | any): Observable<any> => {
          endTime = (new Date()).getTime();
          responseTime = `Request ${error?.url} failed in in ${endTime - startTime} milli seconds`;
          return throwError(error);
        }),
        finalize(() => {
          console.log(responseTime);
        })
      );
  }
}
