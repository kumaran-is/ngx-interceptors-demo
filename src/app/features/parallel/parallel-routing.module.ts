import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParallelComponent } from './parallel.component';

const routes: Routes = [
  {
    path: '',
    component: ParallelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParallelRoutingModule {
  static components = [ParallelComponent];
}
