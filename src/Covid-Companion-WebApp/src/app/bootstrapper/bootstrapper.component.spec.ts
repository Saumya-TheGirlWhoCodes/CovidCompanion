import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapperComponent } from './bootstrapper.component';

describe('BootstrapperComponent', () => {
  let component: BootstrapperComponent;
  let fixture: ComponentFixture<BootstrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
