import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BronwynComponent } from './bronwyn.component';

describe('BronwynComponent', () => {
  let component: BronwynComponent;
  let fixture: ComponentFixture<BronwynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BronwynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BronwynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
