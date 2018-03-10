import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginningsComponent } from './beginnings.component';

describe('BeginningsComponent', () => {
  let component: BeginningsComponent;
  let fixture: ComponentFixture<BeginningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
