import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarthaComponent } from './martha.component';

describe('MarthaComponent', () => {
  let component: MarthaComponent;
  let fixture: ComponentFixture<MarthaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarthaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
