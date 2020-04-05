import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicModalsComponent } from './dyanamic-modals.component';

describe('DyanamicModalsComponent', () => {
  let component: DyanamicModalsComponent;
  let fixture: ComponentFixture<DyanamicModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyanamicModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanamicModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
