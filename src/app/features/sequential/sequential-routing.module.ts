import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SequentialComponent } from './sequential.component';

const routes: Routes = [
  {
    path: '',
    component: SequentialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SequentialRoutingModule {
  static components = [SequentialComponent];
}
