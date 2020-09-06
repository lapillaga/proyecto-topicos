import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedQueryComponent } from './predefined-query.component';

describe('PredefinedQueryComponent', () => {
  let component: PredefinedQueryComponent;
  let fixture: ComponentFixture<PredefinedQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
