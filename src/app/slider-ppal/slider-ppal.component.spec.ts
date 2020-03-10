import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPpalComponent } from './slider-ppal.component';

describe('SliderPpalComponent', () => {
  let component: SliderPpalComponent;
  let fixture: ComponentFixture<SliderPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
