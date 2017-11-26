import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsContainerComponent } from './views-container.component';

describe('ViewsContainerComponent', () => {
  let component: ViewsContainerComponent;
  let fixture: ComponentFixture<ViewsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
