import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBlurbComponent } from './employee-blurb.component';

describe('EmployeeBlurbComponent', () => {
  let component: EmployeeBlurbComponent;
  let fixture: ComponentFixture<EmployeeBlurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBlurbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
