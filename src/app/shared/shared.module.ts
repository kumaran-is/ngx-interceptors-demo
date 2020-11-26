import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { PageTitleComponent } from '@components/page-title/page-title.component';
import { CountryCardComponent } from '@components/country-card/country-card.component';
import { CountryTableComponent } from '@components/country-table/country-table.component';
import { WeatherCardComponent } from '@components/weather-card/weather-card.component';
import { ErrorModalComponent } from '@components/error-modal/error-modal.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { LoadingService } from '@components/loading/loading.service';
import { ErrorModalService } from '@components/error-modal/error-modal.service';
import { NavLoaderComponent } from './components/nav-loader/nav-loader.component';

@NgModule({
  declarations: [
    PageTitleComponent,
    CountryCardComponent,
    CountryTableComponent,
    WeatherCardComponent,
    ErrorModalComponent,
    LoadingComponent,
    NavLoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AgGridModule,
    PageTitleComponent,
    CountryCardComponent,
    CountryTableComponent,
    WeatherCardComponent,
    ErrorModalComponent,
    LoadingComponent,
    NavLoaderComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        LoadingService,
        ErrorModalService
      ],
    };
 }
}
