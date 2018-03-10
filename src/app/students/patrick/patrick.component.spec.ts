import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrickComponent } from './patrick.component';

describe('PatrickComponent', () => {
  let component: PatrickComponent;
  let fixture: ComponentFixture<PatrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
