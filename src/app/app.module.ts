import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenav, MatTabsModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SalesOrderListComponent } from './components/sales-order-list/sales-order-list.component';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryAuditComponent } from './components/inventory-audit/inventory-audit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LumberCategoryService } from './services/lumber-category.service';
import { LumberSubCategoryService } from './services/lumber-sub-category.service';
import { LumberCategoryFormComponent } from './components/lumber-category-form/lumber-category-form.component';
import { LumberSubCategoryListComponent } from './components/lumber-sub-category-list/lumber-sub-category-list.component';
import { LumberCategoryFormTabComponent } from './components/lumber-category-form-tab/lumber-category-form-tab.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterService } from './services/router.service';

const routes: Routes = [
  { path: '', component: CatalogComponent, data: {title: 'Product Catalog'} },
  { path: 'audit', component: InventoryAuditComponent, data: {title: 'Audit Inventory'} },
  { path: 'catalog', component: CatalogComponent, data: {title: 'Product Catalog'} },
  { path: 'incoming', component: PurchaseOrderListComponent, data: {title: 'Incoming Orders'} },
  { path: 'inventory', component: InventoryComponent, data: {title: 'Inventory'} },
  { path: 'sales-orders', component: SalesOrderListComponent, data: {title: 'Sales Orders'} },
  { path: 'users', component: UserListComponent, data: {title: 'Users'} },
  { path: '**', component: CatalogComponent, data: {title: 'Product Catalog'} }
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
    LumberCategoryFormComponent,
    LumberSubCategoryListComponent,
    LumberCategoryFormTabComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    LumberCategoryService,
    LumberSubCategoryService,
    RouterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
