import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAuditComponent } from './inventory-audit.component';

describe('InventoryAuditComponent', () => {
  let component: InventoryAuditComponent;
  let fixture: ComponentFixture<InventoryAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
