import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('calling auth interceptors');
    const unauthorizedError = 401;
    const forbiddenError = 403;
    const errors = [unauthorizedError, forbiddenError];

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse | any): Observable<any> => {
          if (error instanceof HttpErrorResponse) {
            if (errors.indexOf(error.status) >= 0) {
             // call authService.handleServiceError(error);
            }
          } else {
            if (error.networkError && error.networkError.statusCode === unauthorizedError) {
              // call authService.handleServiceError(error);
            }
          }

          return throwError(error);
        })
      );
  }
}
