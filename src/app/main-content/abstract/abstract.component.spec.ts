import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursSectionComponent } from './abstract.component';

describe('ToursSectionComponent', () => {
  let component: ToursSectionComponent;
  let fixture: ComponentFixture<ToursSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
