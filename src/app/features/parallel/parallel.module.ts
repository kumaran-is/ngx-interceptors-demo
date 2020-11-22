import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ParallelRoutingModule } from './parallel-routing.module';

@NgModule({
  declarations: [ParallelRoutingModule.components],
  imports: [
    SharedModule,
    ParallelRoutingModule
  ]
})
export class ParallelModule { }
