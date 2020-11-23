import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoreConstants } from '@core/core.constants';
import { Country } from '@models/country';
import { CountryService } from '@services/country/country.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public pageTitle = CoreConstants.SEARCH_PAGE_TITLE;
  public searchControl: FormControl;
  public countries$: Observable<Country[]>;

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.countries$ = this.populateCountries();
  }

  public populateCountries() {
    return this.searchControl.valueChanges
      .pipe(
        map((searchText: string) => searchText && searchText.trim()),
        filter((searchText: string) => {
          const filteredResult = searchText.length > 3 && searchText.length < 15;
          return filteredResult;
        }),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchText: string): Observable<Country[]> => {
          return this.countryService.getCountries(searchText);
        })
      );
  }

}
