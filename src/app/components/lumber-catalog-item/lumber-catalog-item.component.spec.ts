import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberCatalogItemComponent } from './lumber-catalog-item.component';

describe('LumberCatalogItemComponent', () => {
  let component: LumberCatalogItemComponent;
  let fixture: ComponentFixture<LumberCatalogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumberCatalogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberCatalogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
