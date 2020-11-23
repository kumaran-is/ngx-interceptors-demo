import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '@models/weather';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public readonly API_KEY = '8ee16f4220b16d9e5da632f607c250ec';

  constructor(
    private http: HttpClient
  ) { }

  public getWeatherByCityName(cityName: String):  Observable<any> {

    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${this.API_KEY}`)
    .pipe(
      map((response: any) => {
        const weather: Weather = new Weather();
        if (Object.keys(response).length) {
          weather.name =  response.name;
          weather.description =  response.weather[0].description;
          weather.temperature =  response.main.temp;
          weather.humidity =  response.main.humidity;
          weather.minTemperature =  response.main.temp_min;
          weather.maxTemperature = response.main.temp_max;
        }
        return weather;
      }),
      catchError(this.handleAndThrowRemoteError.bind(this))
    );
  }

  public handleAndThrowRemoteError(error: HttpErrorResponse | any): Observable<any> {
    return throwError(error);
  }

}
