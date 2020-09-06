import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptQueryComponent } from './concept-query.component';

describe('ConceptQueryComponent', () => {
  let component: ConceptQueryComponent;
  let fixture: ComponentFixture<ConceptQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
