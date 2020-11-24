import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PageTitleComponent } from '@components/page-title/page-title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
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
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
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
