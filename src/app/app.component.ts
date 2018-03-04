import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  showAudit(sidenav: MatSidenav) {
    this.changePage('audit', sidenav);
  }
  
  showCatalog(sidenav: MatSidenav) {
    this.changePage('catalog', sidenav);
  }

  showHome(sidenav: MatSidenav) {
    this.changePage('', sidenav);
  }

  showInventory(sidenav: MatSidenav) {
    this.changePage('inventory', sidenav);
  }

  showPurchaseOrderList(sidenav: MatSidenav) {
    this.changePage('incoming', sidenav);
  }

  showSalesOrderList(sidenav: MatSidenav) {
    this.changePage('sales-orders', sidenav);
  }

  showUserList(sidenav: MatSidenav) {
    this.changePage('users', sidenav);
  }

  changePage(route: string, sidenav: MatSidenav) {
    this.router.navigate([route]);
    sidenav.opened = false;
  }
}
