import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MenuItems } from '../../utils/menuitems';
import { DoctorRegistrationDialogComponent } from '../doctor-registration-dialog/doctor-registration-dialog.component';
@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  menuItems = MenuItems.getMenu();
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  showRegistrationDialog() {
    this.dialog.open(DoctorRegistrationDialogComponent, {
      height: '400px',
      width: '300px'
    });
  }

}
