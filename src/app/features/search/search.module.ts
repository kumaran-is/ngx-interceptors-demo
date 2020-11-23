import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchRoutingModule.components],
  imports: [
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
