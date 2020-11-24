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
    let elapsedTime = null;
    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.ok) {
            endTime = (new Date()).getTime();
            elapsedTime = `Request ${request.method} ${request.urlWithParams} succeded in ${endTime - startTime} milli seconds`;
          }
        }),
        catchError((error: HttpErrorResponse | any): Observable<any> => {
          endTime = (new Date()).getTime();
          elapsedTime = `Request ${request.method} ${request.urlWithParams} failed in ${endTime - startTime} milli seconds`;
          return throwError(error);
        }),
        finalize(() => {
          console.log(elapsedTime);
        })
      );
  }
}
