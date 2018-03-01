import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberCategoryFormTabComponent } from './lumber-category-form-tab.component';

describe('LumberCategoryFormTabComponent', () => {
  let component: LumberCategoryFormTabComponent;
  let fixture: ComponentFixture<LumberCategoryFormTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumberCategoryFormTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberCategoryFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
