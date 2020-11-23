import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, delay, tap, finalize } from 'rxjs/operators';
import { LoadingService } from '@services/loading/loading.service';
import { ErrorModalService } from '@services/error-modal/error-modal.service';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {
  // This Array should only contain in-progress http requests
  private requests: HttpRequest<any>[] = [];

  constructor(
    private loadingService: LoadingService,
    private errorModalService: ErrorModalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('calling error interceptors');
    this.requests.push(request);

    console.log('No of requests--->' + this.requests.length);
    this.loadingService.showLoader();

    return next.handle(request)
      .pipe(
        delay(2250),
        tap((evt) => {
          if (evt instanceof HttpResponse && evt.body && evt.body.success) {
            this.removeRequest(request);
          }
        }),
        catchError((error: HttpErrorResponse | any): Observable<any> => {
          let httpError = null;
          this.removeRequest(request);
          if (!navigator.onLine) {
            httpError = { message: 'No Internet Connection. You are offline!' };
          } else {
            try {
              if (error.error instanceof ErrorEvent) {
                // local client-side(browser) error
                console.log('<<<<<process client errors 111 >>>>>');
                httpError = { message: error.error.message || 'Undefined client error' };
              } else {
                  // server-side(from server) error 4xx(except 401 & 403), 5xx etc
                httpError = { statusCode: error.status || 'Undefined status code', message: error.message  || 'Undefined server error'};
                console.log('<<<<<process server errors 222 >>>>>');
              }
            } catch (e) {
              httpError = { message: error.error.message || 'Undefined error' };
            }
          }
          console.log('<<<<<process Non Auth errors 333 >>>>>', httpError);
          this.errorModalService.showErrorModal(httpError);

          return throwError(error);
        }),
        finalize(() => {
          console.log('>>>>>finalize>>>>>>')
          this.removeRequest(request);
        })
      );
  }

  private removeRequest(request: HttpRequest<any>) {
    const index = this.requests.indexOf(request);
    if (index >= 0) {
      this.requests.splice(index, 1);
    }
    if(this.requests.length === 0)
    {
      this.loadingService.hideLoader()
    }
  }
}