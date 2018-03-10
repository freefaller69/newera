import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecollectionsComponent } from './recollections.component';

describe('RecollectionsComponent', () => {
  let component: RecollectionsComponent;
  let fixture: ComponentFixture<RecollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
