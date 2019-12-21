import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccormodationComponent } from './accormodation.component';

describe('AccormodationComponent', () => {
  let component: AccormodationComponent;
  let fixture: ComponentFixture<AccormodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccormodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccormodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
