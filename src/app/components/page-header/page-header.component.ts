import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
