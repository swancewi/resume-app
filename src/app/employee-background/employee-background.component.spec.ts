import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBackgroundComponent } from './employee-background.component';

describe('EmployeeBackgroundComponent', () => {
  let component: EmployeeBackgroundComponent;
  let fixture: ComponentFixture<EmployeeBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
