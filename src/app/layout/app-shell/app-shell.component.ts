import { Component, OnInit } from '@angular/core';
import { routeAnimations } from '@shared/animations/route.animations';
@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  animations: [routeAnimations]
})
export class AppShellComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
