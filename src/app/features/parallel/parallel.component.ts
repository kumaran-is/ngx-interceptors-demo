import { Component, OnInit } from '@angular/core';
import { CoreConstants } from '@core/core.constants';
import { Country } from '@models/country';
import { Weather } from '@models/weather';
import { CountryService } from '@services/country/country.service';
import { WeatherService } from '@services/weather/weather.service';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.scss']
})
export class ParallelComponent implements OnInit {

  public pageTitle = CoreConstants.PARALLEL_PAGE_TITLE;
  public combinedResponse$:  Observable<any>;

  constructor(
    private countryService: CountryService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.populateCountryDetailAndCapitalCityWeather('paris');
  }

  public populateCountryDetailAndCapitalCityWeather(capitalCityName: string) {
    this.combinedResponse$ = forkJoin(
      this.populateCountryDetailByCapitalCity(capitalCityName),
      this.populateWeatherByCity(capitalCityName),
    )
    .pipe (
        catchError(this.handleError.bind(this)),
    );
  }

  private populateWeatherByCity(cityName: string): Observable<Weather> {
    return this.weatherService.getWeatherByCityName(cityName);
  }

  private populateCountryDetailByCapitalCity(capitalCityName: string): Observable<Country> {
    return this.countryService.getCountryDetailByCapitalCity(capitalCityName);
  }

  private handleError(error: any): Observable<any> {
    console.error('Error while making parallel call', error);
    return EMPTY;
  }

}
