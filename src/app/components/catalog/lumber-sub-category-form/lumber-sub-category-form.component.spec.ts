import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberSubCategoryFormComponent } from './lumber-sub-category-form.component';

describe('LumberSubCategoryFormComponent', () => {
  let component: LumberSubCategoryFormComponent;
  let fixture: ComponentFixture<LumberSubCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumberSubCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberSubCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
