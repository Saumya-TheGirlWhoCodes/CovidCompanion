import { Component, OnInit, Input } from '@angular/core';
import { ITableHeaders } from 'src/app/core/itableheaders';

@Component({
  selector: 'app-table-representation',
  templateUrl: './table-representation.component.html',
  styleUrls: ['./table-representation.component.css']
})
export class TableRepresentationComponent implements OnInit {
  // TODO: remove all hardcoded values.
  @Input() loadedData: Array<object> = [{Name:'Aayush', Email: 'thebest1@live.in'}, {'Name':'Sankalp','Email':'sankalppandey@pandey.in'}];
  @Input() headers: Array<ITableHeaders> = [{tableColumnName: 'Name'},{tableColumnName: 'Email'}];
  displayColumns: Array<string> = this.headers.map((element) => {
    return element.tableColumnName;
  });
  constructor() {
    console.log('Headers: ',this.headers);
    console.log('displayColumns: ',this.displayColumns);
    console.log('loadedData:', this.loadedData);
  }

  ngOnInit() {
  }

}
