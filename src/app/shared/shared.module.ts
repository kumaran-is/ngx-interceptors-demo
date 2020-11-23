import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PageTitleComponent } from '@components/page-title/page-title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CountryCardComponent } from '@components/country-card/country-card.component';
import { CountryTableComponent } from '@components/country-table/country-table.component';
import { WeatherCardComponent } from '@components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    PageTitleComponent,
    CountryCardComponent,
    CountryTableComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    AgGridModule,
    PageTitleComponent,
    CountryCardComponent,
    CountryTableComponent,
    WeatherCardComponent
  ]
})
export class SharedModule { }
