import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorModalService } from '@components/error-modal/error-modal.service';
import { AUTH_ERROR_STATUS }  from '@models/auth-error-status';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private errorModalService: ErrorModalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse | any): Observable<any> => {
          let httpError = null;
          if (error instanceof HttpErrorResponse) {
            if (error.status in AUTH_ERROR_STATUS) {
             // Throw error dialog or call authService to handle error and navigate to login screen
             httpError = {
               statusCode: error.status || 'Undefined status code',
               message: error.message || 'Undefined server error',
               description: error.error.description || error.error.message || 'Undefined error description'
             };
            }
          } else {
            if (error.networkError && error.networkError.statusCode === AUTH_ERROR_STATUS.UNAUTHORIZED) {
              // Throw error dialog or call authService to handle error and navigate to login screen
              httpError = {
                statusCode: error.networkError.statusCode || 'Undefined status code',
                message: error.networkError.message || 'Undefined server error',
                description: error.error.description || error.error.message || 'Undefined error description'
              };
            }
          }
          if(httpError) {
            this.errorModalService.showErrorModal(httpError);
          }
          return throwError(error);
        })
      );
  }
}
