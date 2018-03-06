import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  year: number = new Date().getFullYear();
  title: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof(ActivationEnd)) {
        let e = event as ActivationEnd;
        this.title = e.snapshot.data['title'];
      }
      console.log(event);
    });
  }

  showAudit() {
    this.changePage('audit');
  }
  
  showCatalog() {
    this.changePage('catalog');
  }

  showHome() {
    this.changePage('');
  }

  showInventory() {
    this.changePage('inventory');
  }

  showPurchaseOrderList() {
    this.changePage('incoming');
  }

  showSalesOrderList() {
    this.changePage('sales-orders');
  }

  showUserList() {
    this.changePage('users');
  }

  changePage(route: string) {
    this.router.navigate([route]);
    this.sidenav.opened = false;
  }
}
