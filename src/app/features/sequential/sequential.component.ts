import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreConstants } from '@core/core.constants';
import { Country } from '@models/country';
import { Weather } from '@models/weather';
import { CountryService } from '@services/country/country.service';
import { WeatherService } from '@services/weather/weather.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-sequential',
  templateUrl: './sequential.component.html',
  styleUrls: ['./sequential.component.scss']
})
export class SequentialComponent implements OnInit {

  public pageTitle = CoreConstants.SEQUENTIAL_PAGE_TITLE;
  public weather: Weather;
  public errorMessage = '';
  public noDataAvailable = '';
  public weather$: Observable<Weather>;

  constructor(
    private countryService: CountryService,
    private weatherService: WeatherService
  ) { }

  public populateCapitalWeather(countryName: string) {
    this.countryService.getCountryDetail(countryName)
      .subscribe(countryResponse => this.weatherService.getWeatherByCityName(countryResponse.capital)
        .subscribe(
          (response) => this.onNext(response),
          (error) => this.onError(error),
          () =>  this.onComplete()
        )
    );
  }

  public populateCapitalWeatherPlus(countryName: string) {
    this.weather$ = this.countryService.getCountryDetail(countryName)
      .pipe (
        mergeMap((countryResponse: Country) => {
          return this.weatherService.getWeatherByCityName(countryResponse.capital);
        }),
        catchError(this.handleError.bind(this)),
      );
  }

  private onNext(response) {
    return this.weather = response;
  }

  private onError(error) {
    console.error(error);
  }

  private onComplete() {
    console.log('Processing is Complete');
  }

  private handleError(error: HttpErrorResponse | any): Observable<any> {
    console.error('Error while making sequential call', error);
    return EMPTY;
  }

}
