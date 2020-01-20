import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetLogComponent } from './budget-log.component';

describe('BudgetLogComponent', () => {
  let component: BudgetLogComponent;
  let fixture: ComponentFixture<BudgetLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
