import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoreConstants } from '@core/core.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = CoreConstants.APP_TITLE;


  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle(`${this.title}`);
  }

  ngOnInit(): void {
  }

}
