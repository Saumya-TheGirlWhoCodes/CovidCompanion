import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDynamicFormControls } from 'src/app/core/idynamicformcontrols';

@Component({
  selector: 'app-dyanamic-modals',
  templateUrl: './dyanamic-modals.component.html',
  styleUrls: ['./dyanamic-modals.component.css']
})
export class DyanamicModalsComponent implements OnInit {
  @Input() formHeading: string;
  @Input() formControls: Array<IDynamicFormControls>;
  @Output() clickOperation = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  public performOperation(): void {
     this.clickOperation.emit(1);
  }

}
