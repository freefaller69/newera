import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaronComponent } from './aaron.component';

describe('AaronComponent', () => {
  let component: AaronComponent;
  let fixture: ComponentFixture<AaronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
