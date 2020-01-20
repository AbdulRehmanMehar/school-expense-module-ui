import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInsidesComponent } from './module-insides.component';

describe('ModuleInsidesComponent', () => {
  let component: ModuleInsidesComponent;
  let fixture: ComponentFixture<ModuleInsidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleInsidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleInsidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
