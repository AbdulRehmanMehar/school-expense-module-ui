import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetIssuanceComponent } from './budget-issuance.component';

describe('BudgetIssuanceComponent', () => {
  let component: BudgetIssuanceComponent;
  let fixture: ComponentFixture<BudgetIssuanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetIssuanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
