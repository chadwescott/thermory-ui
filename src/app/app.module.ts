import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SalesOrderListComponent } from './components/sales-order-list/sales-order-list.component';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryAuditComponent } from './components/inventory-audit/inventory-audit.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'audit', component: InventoryAuditComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'incoming', component: PurchaseOrderListComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'sales-orders', component: SalesOrderListComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', component: CatalogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    SalesOrderListComponent,
    PurchaseOrderListComponent,
    InventoryComponent,
    InventoryAuditComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
