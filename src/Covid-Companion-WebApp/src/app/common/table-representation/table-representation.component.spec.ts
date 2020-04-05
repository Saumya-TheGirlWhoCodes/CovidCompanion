import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRepresentationComponent } from './table-representation.component';

describe('TableRepresentationComponent', () => {
  let component: TableRepresentationComponent;
  let fixture: ComponentFixture<TableRepresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRepresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
