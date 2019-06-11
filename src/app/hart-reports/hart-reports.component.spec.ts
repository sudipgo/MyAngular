import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HartReportsComponent } from './hart-reports.component';

describe('HartReportsComponent', () => {
  let component: HartReportsComponent;
  let fixture: ComponentFixture<HartReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HartReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HartReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
