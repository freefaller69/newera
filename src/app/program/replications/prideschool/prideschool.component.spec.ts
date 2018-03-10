import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrideschoolComponent } from './prideschool.component';

describe('PrideschoolComponent', () => {
  let component: PrideschoolComponent;
  let fixture: ComponentFixture<PrideschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrideschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrideschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
