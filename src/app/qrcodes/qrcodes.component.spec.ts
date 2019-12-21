import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodesComponent } from './qrcodes.component';

describe('QrcodesComponent', () => {
  let component: QrcodesComponent;
  let fixture: ComponentFixture<QrcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
