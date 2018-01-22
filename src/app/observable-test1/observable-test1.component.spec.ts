import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTest1Component } from './observable-test1.component';

describe('ObservableTest1Component', () => {
  let component: ObservableTest1Component;
  let fixture: ComponentFixture<ObservableTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
