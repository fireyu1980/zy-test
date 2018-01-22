import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubject001Component } from './my-subject-001.component';

describe('MySubject001Component', () => {
  let component: MySubject001Component;
  let fixture: ComponentFixture<MySubject001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySubject001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubject001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
