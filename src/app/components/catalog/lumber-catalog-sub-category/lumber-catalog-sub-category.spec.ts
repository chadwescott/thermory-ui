import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberCatalogSubCategoryComponent } from './lumber-catalog-sub-category.component';

describe('LumberCatalogSubCategoryComponent', () => {
  let component: LumberCatalogSubCategoryComponent;
  let fixture: ComponentFixture<LumberCatalogSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumberCatalogSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberCatalogSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
