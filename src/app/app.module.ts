import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatSidenavModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CatalogMenuComponent } from './components/catalog/catalog-menu/catalog-menu.component';
import { SalesOrderListComponent } from './components/sales-order-list/sales-order-list.component';
import { PurchaseOrderListComponent } from './components/purchase-order-list/purchase-order-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryAuditComponent } from './components/inventory-audit/inventory-audit.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LumberCategoryService } from './services/lumber-category.service';
import { LumberSubCategoryService } from './services/lumber-sub-category.service';
import { LumberCategoryFormComponent } from './components/catalog/lumber-category-form/lumber-category-form.component';
import { LumberCatalogSubCategoryComponent } from './components/catalog/lumber-catalog-sub-category/lumber-catalog-sub-category.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterService } from './services/router.service';
import { LumberCatalogCategoryComponent } from './components/catalog/lumber-catalog-category/lumber-catalog-category.component';
import { LumberSubCategoryFormComponent } from './components/catalog/lumber-sub-category-form/lumber-sub-category-form.component';
import { RepositoryService } from './services/repository.service';
import { MockRepositoryService } from './services/mock-repository.service';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'audit', component: InventoryAuditComponent, data: {title: 'Audit Inventory'} },
  { path: 'catalog', component: CatalogMenuComponent, data: {title: 'Product Catalog'} },
  {
    path: 'catalog/lumber-categories',
    component: LumberCatalogCategoryComponent,
    data: {title: 'Product Catalog'},
    children: [
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: 'add', component: LumberCategoryFormComponent },
    ],
  },
  { 
    path: 'catalog/lumber-categories/:lumberCategoryId',
    component: LumberCatalogCategoryComponent,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: LumberCategoryFormComponent },
      { path: 'sub-categories', redirectTo: 'sub-categories/add', pathMatch: 'full' },
      { path: 'sub-categories/add', component: LumberCatalogSubCategoryComponent }
    ],
    data: {title: 'Product Catalog'}
  },
  {
    path: 'catalog/sub-categories/:lumberSubCategoryId',
    component: LumberCatalogSubCategoryComponent,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: LumberSubCategoryFormComponent }
    ],
    data: {title: 'Product Catalog'}
  },
  { path: 'incoming', component: PurchaseOrderListComponent, data: {title: 'Incoming Orders'} },
  { path: 'inventory', component: InventoryComponent, data: {title: 'Inventory'} },
  { path: 'sales-orders', component: SalesOrderListComponent, data: {title: 'Sales Orders'} },
  { path: 'users', component: UserListComponent, data: {title: 'Users'} },
  { path: '**', component: CatalogMenuComponent, data: {title: 'Product Catalog'} }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogMenuComponent,
    SalesOrderListComponent,
    PurchaseOrderListComponent,
    InventoryComponent,
    InventoryAuditComponent,
    UserListComponent,
    LumberCategoryFormComponent,
    LumberCatalogSubCategoryComponent,
    PageHeaderComponent,
    LumberCatalogCategoryComponent,
    LumberSubCategoryFormComponent
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
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    LumberCategoryService,
    LumberSubCategoryService,
    {
      provide: RepositoryService,
      useClass: MockRepositoryService
    },
    RouterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
