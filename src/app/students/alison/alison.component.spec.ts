import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlisonComponent } from './alison.component';

describe('AlisonComponent', () => {
  let component: AlisonComponent;
  let fixture: ComponentFixture<AlisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
