import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestingParentComponent } from './nesting-parent.component';

describe('NestingParentComponent', () => {
  let component: NestingParentComponent;
  let fixture: ComponentFixture<NestingParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestingParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
