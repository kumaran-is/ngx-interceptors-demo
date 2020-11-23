import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@interceptors/auth-http.interceptor';
import { ErrorHttpInterceptor } from '@interceptors/error-http.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHttpInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true
  }]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule i.e the AppModule
  and makes all the services(providers) under CoreMode as application-wide
  singleton service */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import CoreModule only in AppModule'
      );
    }
  }
}
