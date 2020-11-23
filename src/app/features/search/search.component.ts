import { Component, OnInit } from '@angular/core';
import { CoreConstants } from '@core/core.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public pageTitle = CoreConstants.SEARCH_PAGE_TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
