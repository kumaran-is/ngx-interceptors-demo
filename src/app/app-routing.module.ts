import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from '@layout/app-shell/app-shell.component';
import { HomeComponent } from '@features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search',
        loadChildren: () =>
          import('@features/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'parallel',
        loadChildren: () =>
          import('@features/parallel/parallel.module').then(m => m.ParallelModule)
      },
      {
        path: 'sequential',
        loadChildren: () =>
          import('@features/sequential/sequential.module').then(m => m.SequentialModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  },
  {
    /* wildcard route using ** as a path should be last in the order */
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
