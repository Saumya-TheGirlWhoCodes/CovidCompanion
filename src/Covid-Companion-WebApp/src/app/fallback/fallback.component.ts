import { Component, OnInit } from '@angular/core';
import {MenuItems} from '../utils/menuitems';

@Component({
  selector: 'app-fallback',
  templateUrl: './fallback.component.html',
  styleUrls: ['./fallback.component.css']
})
export class FallbackComponent implements OnInit {
  logopath = '../../assets/fallback_404.jpg';
  menuItems = MenuItems.getMenu();
  constructor() { }

  ngOnInit() {
  }

}
