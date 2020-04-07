import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navMenu: Array<string>;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe();
  }

  ngOnInit() {

  }

}
