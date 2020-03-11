import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPageComponent } from './npage.component';

describe('NPageComponent', () => {
  let component: NPageComponent;
  let fixture: ComponentFixture<NPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
