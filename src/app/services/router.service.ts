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

  showHome() {
    this.changePage('');
  }

  showAudit() {
    this.changePage('audit');
  }
  
  showCatalog() {
    this.changePage('catalog');
  }

  showCatalogLumberCategory(id: string) {
    let suffix: string;
    if (id == null)
      suffix = 'add';
    let route = this.getLumberCateogryBaseRoute(id, suffix);
    this.changePage(route);
  }

  private getLumberCateogryBaseRoute(id: string, suffix: string) {
    let route = 'catalog/lumber-categories';
    if (id != null)
      route += '/' + id;
    if (suffix != null)
      route += '/' + suffix;
    return route;
  }

  showEditLumberCategory(id: string) {
    let route = this.getLumberCateogryBaseRoute(id, 'edit');
    this.changePage(route);
  }

  showEditLumberSubCategory(categoryId: string, subCategoryId: string) {
    let route = 'catalog/lumber-categories/' + categoryId + '/sub-categories/' + subCategoryId + '/edit';
    this.changePage(route);
  }

  showCatalogLumberSubCategory(categoryId: string, subCategoryId: string) {
    this.changePage('catalog/lumber-categories/' + categoryId + '/sub-categories/' + subCategoryId);
  }

  showInventory() {
    this.changePage('inventory');
  }
  kkk
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
    this.pageChanged.emit();
  }
}
