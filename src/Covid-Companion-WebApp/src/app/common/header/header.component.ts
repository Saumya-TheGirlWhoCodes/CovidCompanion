import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title = 'COVID Companion';
  constructor() { }

  ngOnInit() {
  }
  public get getTitle(){
    return this.title;
  }
  public getHeaderStyle() {
    const style = {'text-align': 'center'};
    return style;
  }


}
