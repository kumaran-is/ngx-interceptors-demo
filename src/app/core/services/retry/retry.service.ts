import { Observable, throwError, of } from 'rxjs';
import { mergeMap, delay, retryWhen  } from 'rxjs/operators';

  const DEFAULT_MAX_RETRY = 3;
  const DEFAULT_BACKOFF = 500;
  const DEFAULT_DELAY = 500;

  function  getErrorMessage (maxRetry: number) {
    return `Retried ${maxRetry} times without success`
  }

  // Retry 3 times with delay of 1/2 second between each retry
  export function retryWithDelay(
    delayInMs: number = DEFAULT_DELAY,
    maxRetry: number = DEFAULT_MAX_RETRY) {
    let retries = maxRetry;
      return (src: Observable<any>) =>
        src.pipe(
          retryWhen((errors: Observable<any>) =>
            errors.pipe(
              delay(delayInMs),
              mergeMap(error => retries-- > 0 ? of(error): throwError(getErrorMessage(maxRetry))
            )
          )
        ))
  }

  // Retry 3 times with increment delay of 1/2 second, 1 second and 1 1/2 seconds
  export function retryWithBackOff(
    delayInMs: number = DEFAULT_DELAY,
    maxRetry: number = DEFAULT_MAX_RETRY,
    backOffInMs: number = DEFAULT_BACKOFF) {
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
                return throwError(getErrorMessage(maxRetry))
              })
            )
          )
        )
  }

