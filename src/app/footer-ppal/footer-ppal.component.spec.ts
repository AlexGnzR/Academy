import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPpalComponent } from './footer-ppal.component';

describe('FooterPpalComponent', () => {
  let component: FooterPpalComponent;
  let fixture: ComponentFixture<FooterPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
