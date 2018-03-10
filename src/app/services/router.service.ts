import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router, ActivationEnd, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class RouterService {
  @Output() pageChanged = new  EventEmitter();
  title: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof(ActivationEnd)) {
        let e = event as ActivationEnd;
        this.title = e.snapshot.data['title'];
        this.pageChanged.emit();
      }
    });
  }

  showAudit() {
    this.changePage('audit');
  }
  
  showCatalog() {
    this.changePage('catalog');
  }

  showCatalogLumberCategory(id: string) {
    let route = 'catalog/lumber-category';
    if (id != null)
      route += '/' + id;
    this.changePage(route);
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

  private changePage(route: string) {
    this.router.navigate([route]);
    this.pageChanged.emit
  }
}
