import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Register2Component } from './register2.component';

describe('Register2Component', () => {
  let component: Register2Component;
  let fixture: ComponentFixture<Register2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
