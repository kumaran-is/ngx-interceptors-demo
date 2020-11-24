import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { RequestTimerInterceptor } from  '@interceptors/request-timer.interceptor';
import { AuthHttpInterceptor } from '@interceptors/auth-http.interceptor';
import { ErrorHttpInterceptor } from '@interceptors/error-http.interceptor';

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: RequestTimerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHttpInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
];
