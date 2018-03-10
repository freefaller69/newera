import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelindaComponent } from './melinda.component';

describe('MelindaComponent', () => {
  let component: MelindaComponent;
  let fixture: ComponentFixture<MelindaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelindaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
