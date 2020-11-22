import { Component, OnInit } from '@angular/core';
import { CoreConstants } from '@core/core.constants';

@Component({
  selector: 'app-sequential',
  templateUrl: './sequential.component.html',
  styleUrls: ['./sequential.component.scss']
})
export class SequentialComponent implements OnInit {

  public pageTitle = CoreConstants.SEQUENTIAL_PAGE_TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}
