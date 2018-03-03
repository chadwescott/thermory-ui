import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  showAudit() {
    this.router.navigate(['audit'])
  }
  
  showCatalog() {
    this.router.navigate(['catalog']);
  }

  showHome() {
    this.router.navigate([''])
  }

  showInventory() {
    this.router.navigate(['inventory'])
  }

  showPurchaseOrderList() {
    this.router.navigate(['incoming'])
  }

  showSalesOrderList() {
    this.router.navigate(['sales-orders'])
  }

  showUserList() {
    this.router.navigate(['users'])
  }
}
