import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeyerschellComponent } from './meyerschell.component';

describe('MeyerschellComponent', () => {
  let component: MeyerschellComponent;
  let fixture: ComponentFixture<MeyerschellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeyerschellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeyerschellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
