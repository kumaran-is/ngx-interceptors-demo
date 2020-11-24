import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorModalService } from '@components/error-modal/error-modal.service';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

  constructor(private errorModalService: ErrorModalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse | any): Observable<any> => {
          let httpError = null;
          if (!navigator.onLine) {
            httpError = { message: 'No Internet Connection. You are offline!' };
          } else {
            try {
              if (error.error instanceof ErrorEvent) {
                // local client-side(browser) error
                httpError = {
                  message: error.error.message || 'Undefined client error',
                  description: error.error.description || error.error.message || 'Undefined error description'
                };
              } else {
                  // server-side(from server) error 4xx(except 401 & 403), 5xx etc
                httpError = {
                  statusCode: error.status || 'Undefined status code',
                  message: error.message  || 'Undefined server error',
                  description: error.error.description || error.error.message || 'Undefined error description'
                };
              }
            } catch (e) {
              httpError = {
                message: error.error.message || 'Undefined error',
                description: error.error.description || error.error.message || 'Undefined error description'
              };
            }
          }
          this.errorModalService.showErrorModal(httpError);
          return throwError(error);
        })
      );
  }


}
