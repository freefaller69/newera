import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersstoryComponent } from './fathersstory.component';

describe('FathersstoryComponent', () => {
  let component: FathersstoryComponent;
  let fixture: ComponentFixture<FathersstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FathersstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FathersstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
