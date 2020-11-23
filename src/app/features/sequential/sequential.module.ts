import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SequentialRoutingModule } from './sequential-routing.module';

@NgModule({
  declarations: [SequentialRoutingModule.components],
  imports: [
    SharedModule,
    SequentialRoutingModule
  ]
})
export class SequentialModule { }
