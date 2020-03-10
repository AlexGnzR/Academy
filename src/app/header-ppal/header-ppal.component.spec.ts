import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPpalComponent } from './header-ppal.component';

describe('HeaderPpalComponent', () => {
  let component: HeaderPpalComponent;
  let fixture: ComponentFixture<HeaderPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
