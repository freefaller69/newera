import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiarabiaComponent } from './saudiarabia.component';

describe('SaudiarabiaComponent', () => {
  let component: SaudiarabiaComponent;
  let fixture: ComponentFixture<SaudiarabiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudiarabiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudiarabiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
