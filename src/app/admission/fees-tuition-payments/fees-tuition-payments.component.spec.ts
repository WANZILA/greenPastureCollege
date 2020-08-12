import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesTuitionPaymentsComponent } from './fees-tuition-payments.component';

describe('FeesTuitionPaymentsComponent', () => {
  let component: FeesTuitionPaymentsComponent;
  let fixture: ComponentFixture<FeesTuitionPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesTuitionPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesTuitionPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
