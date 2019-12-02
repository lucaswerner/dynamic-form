import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDeclineComponent } from './accept-decline.component';

describe('AcceptDeclineComponent', () => {
  let component: AcceptDeclineComponent;
  let fixture: ComponentFixture<AcceptDeclineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptDeclineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
