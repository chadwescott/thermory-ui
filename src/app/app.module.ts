import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SalesOrderListComponent } from './components/sales-order-list/sales-order-list.component';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryAuditComponent } from './components/inventory-audit/inventory-audit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LumberCategoryService } from './services/lumber-category.service';
import { LumberCategoryFormComponent } from './components/lumber-category-form/lumber-category-form.component';

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
    UserListComponent,
    LumberCategoryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [LumberCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
