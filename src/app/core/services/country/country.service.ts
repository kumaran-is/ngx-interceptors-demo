import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@models/country';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  public getCountryDetail(countryName: String):  Observable<any> {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
    .pipe(
      tap((response: any) => {
        console.log(response);
      }),
      map(response => {
        const country: Country = new Country();
        const countryResponse = response[0];
        country.name =  countryResponse.name;
        country.capital =  countryResponse.capital;
        country.region =  countryResponse.region;
        country.population =  countryResponse.population;
        country.currency =  countryResponse.currencies[0].code;
        country.flag = countryResponse.flag;
        return country;
      }),
      catchError(this.handleRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  public getCountries(searchKey: string):  Observable<any> {

    return this.http.get<Country[]>(`https://httpstat.us/404?sleep=5000`)
    //return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/name/${searchKey}`)
    .pipe(
      map((response: any) => {
        const countries: Country[] = [];
        response.forEach(countryResponse => {
          const country: Country = new Country();
          country.name =  countryResponse.name;
          country.capital =  countryResponse.capital;
          country.region =  countryResponse.region;
          country.population =  countryResponse.population;
          country.currency =  countryResponse.currencies[0].code;
          country.flag = countryResponse.flag;
          countries.push(country);
        });
        return countries;
      }),
      catchError(this.handleErrorAndReturnEmptyObservable.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  public getCountryDetailByCapitalCity(capitalCity: string):  Observable<any> {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/capital/${capitalCity}`)
    .pipe(
      map((response: any) => {
        const country: Country = new Country();
        if (Array.isArray(response) && response.length
            && Object.keys(response[0]).length) {
          const countryResponse = response[0];
          country.name =  countryResponse.name;
          country.capital =  countryResponse.capital;
          country.region =  countryResponse.region;
          country.population =  countryResponse.population;
          country.currency =  countryResponse.currencies[0].code;
          country.flag = countryResponse.flag;
        }
        return country;
      }),
      catchError(this.handleAndThrowRemoteError.bind(this)),
      finalize(() => {
        console.log('Clean up your resource here ');
      })
    );
  }

  private handleRemoteError(error: HttpErrorResponse | any): Observable<any> {
    console.error('Error caught while making remote Service call, continue with empty country object', error);
    return of(new Country());
  }

  private handleErrorAndReturnEmptyObservable(error: HttpErrorResponse | any): Observable<any> {
    console.error('Error caught while making remote Service call, continuing with empty Observable', error);
    return EMPTY;
  }

  public handleAndThrowRemoteError(error: HttpErrorResponse | any): Observable<any> {
    return throwError(error);
  }

}
