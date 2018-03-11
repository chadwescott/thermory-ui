import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberCatalogCategoryComponent } from './lumber-catalog-category.component';

describe('LumberCatalogCategoryComponent', () => {
  let component: LumberCatalogCategoryComponent;
  let fixture: ComponentFixture<LumberCatalogCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumberCatalogCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberCatalogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
