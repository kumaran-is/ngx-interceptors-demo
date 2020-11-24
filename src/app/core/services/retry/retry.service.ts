import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { retry, tap, mergeMap, delay, retryWhen, delayWhen, scan  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetryService {

  DEFAULT_MAX_RETRY = 3;
  DEFAULT_BACKOFF = 500;
  DEFAULT_DELAY = 500;

  constructor() { }

  private getErrorMessage (maxRetry: number) {
    return `Tried ${maxRetry} times without success`
  }

  public retryWithDelay(
    delayInMs: number = this.DEFAULT_DELAY,
    maxRetry: number = this.DEFAULT_MAX_RETRY) {
    let retries = maxRetry;
      return (src: Observable<any>) =>
        src.pipe(
          retryWhen((errors: Observable<any>) =>
            errors.pipe(
              delay(delayInMs),
              mergeMap(error => retries-- > 0 ? of(error): throwError(this.getErrorMessage(maxRetry))
            )
          )
        ))
  }

  public retryWithBackOff(
    delayInMs: number = this.DEFAULT_DELAY,
    maxRetry: number = this.DEFAULT_MAX_RETRY,
    backOffInMs: number = this.DEFAULT_BACKOFF) {
    let retries = maxRetry;
      return (src: Observable<any>) =>
        src.pipe(
          retryWhen((errors: Observable<any>) =>
            errors.pipe(
              mergeMap(error =>  {
                if(retries-- > 0) {
                  const backOffTime = delayInMs + (maxRetry - retries) * backOffInMs;
                  return of(error).pipe(delay(backOffTime));
                }
                return throwError(this.getErrorMessage(maxRetry))
              })
            )
          )
        )
  }
}
