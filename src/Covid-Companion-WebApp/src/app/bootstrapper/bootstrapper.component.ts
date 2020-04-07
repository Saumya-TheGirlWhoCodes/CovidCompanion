import { Component, OnInit } from '@angular/core';
import {MenuItems} from '../utils/menuitems';
@Component({
  selector: 'app-bootstrapper',
  templateUrl: './bootstrapper.component.html',
  styleUrls: ['./bootstrapper.component.css']
})
export class BootstrapperComponent implements OnInit {

  logopath = '../../assets/bootstrap_logo.jpg';
  menuItems = MenuItems.getMenu();
  constructor() { }

  ngOnInit() {
  }

}
