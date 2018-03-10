import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SibstoriesComponent } from './sibstories.component';

describe('SibstoriesComponent', () => {
  let component: SibstoriesComponent;
  let fixture: ComponentFixture<SibstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SibstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SibstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
