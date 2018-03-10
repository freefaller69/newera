import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristyComponent } from './christy.component';

describe('ChristyComponent', () => {
  let component: ChristyComponent;
  let fixture: ComponentFixture<ChristyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
