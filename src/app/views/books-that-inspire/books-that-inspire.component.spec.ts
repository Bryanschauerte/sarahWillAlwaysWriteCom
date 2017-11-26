import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksThatInspireComponent } from './books-that-inspire.component';

describe('BooksThatInspireComponent', () => {
  let component: BooksThatInspireComponent;
  let fixture: ComponentFixture<BooksThatInspireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksThatInspireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksThatInspireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
