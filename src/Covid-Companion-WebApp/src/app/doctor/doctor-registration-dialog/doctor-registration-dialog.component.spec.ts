import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegistrationDialogComponent } from './doctor-registration-dialog.component';

describe('DoctorRegistrationDialogComponent', () => {
  let component: DoctorRegistrationDialogComponent;
  let fixture: ComponentFixture<DoctorRegistrationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorRegistrationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
