import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicationsComponent } from './replications.component';

describe('ReplicationsComponent', () => {
  let component: ReplicationsComponent;
  let fixture: ComponentFixture<ReplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
