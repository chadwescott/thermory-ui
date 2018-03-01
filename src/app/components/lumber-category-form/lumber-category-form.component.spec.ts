import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumberCategoryFormComponent } from './lumber-category-form.component';

describe('LumberCategoryFormComponent', () => {
  let component: LumberCategoryFormComponent;
  let fixture: ComponentFixture<LumberCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumberCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumberCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
