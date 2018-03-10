import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeffComponent } from './jeff.component';

describe('JeffComponent', () => {
  let component: JeffComponent;
  let fixture: ComponentFixture<JeffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
