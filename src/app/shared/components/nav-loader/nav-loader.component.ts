import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nav-loader',
  templateUrl: './nav-loader.component.html',
  styleUrls: ['./nav-loader.component.scss']
})
export class NavLoaderComponent implements OnInit {

  public isLoading$: Observable<boolean>;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLoading$ = this.router.events.pipe(
      filter(
        event =>
          event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
      ),
      map(event => !!(event instanceof NavigationStart))
    );
  }

}
