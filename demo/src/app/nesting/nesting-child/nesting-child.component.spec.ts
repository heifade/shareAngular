import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingChildComponent } from './nesting-child.component';

describe('NestingChildComponent', () => {
  let component: NestingChildComponent;
  let fixture: ComponentFixture<NestingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
