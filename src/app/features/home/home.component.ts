import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CoreConstants } from '@core/core.constants';
import { Covid } from '@models/covid';
import { CovidService } from '@services/covid/covid.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pageTitle = CoreConstants.HOME_PAGE_TITLE;
  public rowData$: Observable<Covid[]>;
  public columnDefs = [
      { field: 'country', sortable: true, filter: true, resizable: true },
      { field: 'cases', headerName: 'Total Cases', width: 120, sortable: true, resizable: true },
      { field: 'todayCases', headerName: 'New Cases', width: 120, sortable: true, resizable: true},
      { field: 'deaths', headerName: 'Total Deaths', width: 120, sortable: true, resizable: true },
      { field: 'todayDeaths', headerName: 'New Deaths', width: 120, sortable: true, resizable: true},
      { field: 'recovered', headerName: 'Total Recovered', width: 120, sortable: true, resizable: true },
      { field: 'todayRecovered', sortable: true, width: 120, resizable: true},
      { field: 'active', sortable: true, width: 120, resizable: true },
      { field: 'critical', sortable: true, width: 120, resizable: true},
      { field: 'tests', headerName: 'Total Tests', width: 120, sortable: true, resizable: true }
  ];

  constructor(private covidService: CovidService) {
    this.rowData$ = EMPTY;
  }

  ngOnInit(): void {
    this.rowData$ = this.covidService.getAllCountryCovidReports();
  }

}
