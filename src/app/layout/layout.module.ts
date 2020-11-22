import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppShellComponent } from './app-shell/app-shell.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, AppShellComponent],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
