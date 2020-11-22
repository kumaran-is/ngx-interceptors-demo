import { Component, OnInit } from '@angular/core';
import { CoreConstants } from '@core/core.constants';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styleUrls: ['./parallel.component.scss']
})
export class ParallelComponent implements OnInit {

  public pageTitle = CoreConstants.PARALLEL_PAGE_TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
