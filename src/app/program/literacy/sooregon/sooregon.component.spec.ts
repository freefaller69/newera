import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SooregonComponent } from './sooregon.component';

describe('SooregonComponent', () => {
  let component: SooregonComponent;
  let fixture: ComponentFixture<SooregonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SooregonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SooregonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
