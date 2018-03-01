import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberSubCategoryListComponent } from './lumber-sub-category-list.component';

describe('LumberSubCategoryListComponent', () => {
  let component: LumberSubCategoryListComponent;
  let fixture: ComponentFixture<LumberSubCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumberSubCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberSubCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
