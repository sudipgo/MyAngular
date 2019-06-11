import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HartMenuComponent } from './hart-menu.component';

describe('HartMenuComponent', () => {
  let component: HartMenuComponent;
  let fixture: ComponentFixture<HartMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HartMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
