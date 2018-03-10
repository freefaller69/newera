import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChddComponent } from './chdd.component';

describe('ChddComponent', () => {
  let component: ChddComponent;
  let fixture: ComponentFixture<ChddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
