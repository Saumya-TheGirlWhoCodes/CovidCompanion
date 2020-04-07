import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from '../../models/doctor.model';
import { DoctorFormControls } from '../../core/doctor-form.controls';

@Component({
  selector: 'app-doctor-registration-dialog',
  templateUrl: './doctor-registration-dialog.component.html',
  styleUrls: ['./doctor-registration-dialog.component.css']
})
export class DoctorRegistrationDialogComponent implements OnInit {

  formControls  = DoctorFormControls.getFormControls();
  formHeading = 'Doctor Registration';

  constructor(private modalRef: MatDialogRef<DoctorRegistrationDialogComponent>, @Inject(MAT_DIALOG_DATA) data: Doctor) { }

  ngOnInit() {
  }
  performSubmission(){
    // Submit form logic
  }

}
