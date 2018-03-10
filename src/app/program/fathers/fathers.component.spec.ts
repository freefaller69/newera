import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersComponent } from './fathers.component';

describe('FathersComponent', () => {
  let component: FathersComponent;
  let fixture: ComponentFixture<FathersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FathersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
