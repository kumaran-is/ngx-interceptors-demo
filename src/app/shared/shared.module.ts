import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PageTitleComponent } from '@components/page-title/page-title.component';

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    CommonModule,
    AgGridModule,
    PageTitleComponent
  ]
})
export class SharedModule { }
