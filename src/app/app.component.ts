import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { RouterService } from './services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  year: number = new Date().getFullYear();
  title: string;

  constructor(private routerService: RouterService) {
    this.routerService.pageChanged.subscribe(() => this.pageChanged());
  }

  private pageChanged() {
    this.sidenav.opened = false;
  }
}