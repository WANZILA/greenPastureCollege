import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationGuidelinesComponent } from './application-guidelines.component';

describe('ApplicationGuidelinesComponent', () => {
  let component: ApplicationGuidelinesComponent;
  let fixture: ComponentFixture<ApplicationGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
