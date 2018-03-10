import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstreplicationComponent } from './firstreplication.component';

describe('FirstreplicationComponent', () => {
  let component: FirstreplicationComponent;
  let fixture: ComponentFixture<FirstreplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstreplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstreplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
