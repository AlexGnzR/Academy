import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QSPageComponent } from './qspage.component';

describe('QSPageComponent', () => {
  let component: QSPageComponent;
  let fixture: ComponentFixture<QSPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
