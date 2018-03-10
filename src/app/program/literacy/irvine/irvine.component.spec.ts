import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrvineComponent } from './irvine.component';

describe('IrvineComponent', () => {
  let component: IrvineComponent;
  let fixture: ComponentFixture<IrvineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrvineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrvineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
