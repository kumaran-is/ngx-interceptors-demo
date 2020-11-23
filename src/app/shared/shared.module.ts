import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PageTitleComponent } from '@components/page-title/page-title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CountryCardComponent } from '@components/country-card/country-card.component';
import { CountryTableComponent } from '@components/country-table/country-table.component';
import { WeatherCardComponent } from '@components/weather-card/weather-card.component';
import { ErrorModalComponent } from '@components/error-modal/error-modal.component';
import { LoadingComponent } from '@components/loading/loading.component';

@NgModule({
  declarations: [
    PageTitleComponent,
    CountryCardComponent,
    CountryTableComponent,
    WeatherCardComponent,
    ErrorModalComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    AgGridModule,
    PageTitleComponent,
    CountryCardComponent,
    CountryTableComponent,
    WeatherCardComponent,
    ErrorModalComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
