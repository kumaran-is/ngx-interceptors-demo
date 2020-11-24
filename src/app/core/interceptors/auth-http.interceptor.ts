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

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private errorModalService: ErrorModalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('calling auth interceptors');
    const unauthorizedError = 401;
    const forbiddenError = 403;
    const errors = [unauthorizedError, forbiddenError];

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse | any): Observable<any> => {
          let httpError = null;
          if (error instanceof HttpErrorResponse) {
            console.log('>>>>>>>>>>>>> Calling ErrorHttpInterceptor>>>>>>>>>>>>>>', error);
            if (errors.indexOf(error.status) >= 0) {
             // Throw error dialog or call authService to handle error and navigate to login screen
             httpError = {
               statusCode: error.status || 'Undefined status code',
               message: error.message || 'Undefined server error',
               description: error.error.description || error.error.message || 'Undefined error description'
             };
            }
          } else {
            if (error.networkError && error.networkError.statusCode === unauthorizedError) {
              // Throw error dialog or call authService to handle error and navigate to login screen
              httpError = {
                statusCode: error.networkError.statusCode || 'Undefined status code',
                message: error.networkError.message || 'Undefined server error',
                description: error.error.description || error.error.message || 'Undefined error description'
              };
            }
          }
          console.log('>>>>>>>>>>>>>httpError>>>>>>>>>>>>>>', httpError);
          if(httpError) {
            this.errorModalService.showErrorModal(httpError);
          }
          return throwError(error);
        })
      );
  }
}
