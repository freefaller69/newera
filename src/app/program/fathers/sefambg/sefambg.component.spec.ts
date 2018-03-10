import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SefambgComponent } from './sefambg.component';

describe('SefambgComponent', () => {
  let component: SefambgComponent;
  let fixture: ComponentFixture<SefambgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SefambgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SefambgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
