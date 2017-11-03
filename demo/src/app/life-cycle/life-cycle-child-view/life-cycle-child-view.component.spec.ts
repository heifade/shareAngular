import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleChildViewComponent } from './life-cycle-child-view.component';

describe('LifeCycleChildViewComponent', () => {
  let component: LifeCycleChildViewComponent;
  let fixture: ComponentFixture<LifeCycleChildViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleChildViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleChildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
