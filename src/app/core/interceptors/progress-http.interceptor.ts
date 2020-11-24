import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoadingService } from '@components/loading/loading.service';

@Injectable()
export class ProgressHttpInterceptor implements HttpInterceptor {
  // This Array should only contain in-progress http requests
  private requests: HttpRequest<any>[] = [];

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('**************calling ProgressHttpInterceptor **************');
    this.requests.push(request);
    console.log('No of requests--->' + this.requests.length);
    this.loadingService.showLoader();

    return next.handle(request)
      .pipe(
        delay(2250),
        finalize(() => {
          console.log('**************Finalize ProgressHttpInterceptor **************');
          this.removeRequest(request);
        })
      );
  }

  private removeRequest(request: HttpRequest<any>) {
    const index = this.requests.indexOf(request);
    if (index >= 0) {
      this.requests.splice(index, 1);
    }
    if(this.requests.length === 0 && this.loadingService.isLoaderOpen)
    {
      this.loadingService.hideLoader();
    }
  }
}
