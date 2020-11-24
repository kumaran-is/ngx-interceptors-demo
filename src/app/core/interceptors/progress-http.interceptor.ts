import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '@components/loading/loading.service';

@Injectable()
export class ProgressHttpInterceptor implements HttpInterceptor {
  // This Array should only contain in-progress http requests
  private requests: HttpRequest<any>[] = [];

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.requests.push(request);
    this.loadingService.showLoader();

    return next.handle(request)
      .pipe(
        finalize(() => {
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
