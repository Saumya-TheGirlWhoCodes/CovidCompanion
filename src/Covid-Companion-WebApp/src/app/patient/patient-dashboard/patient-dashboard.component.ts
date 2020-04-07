import { Component, OnInit } from '@angular/core';
import {MenuItems} from '../../utils/menuitems';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  menuItems = MenuItems.getMenu();
  constructor() { }

  ngOnInit() {
  }

}
