import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompositionComponent } from './image-composition.component';

describe('ImageCompositionComponent', () => {
  let component: ImageCompositionComponent;
  let fixture: ComponentFixture<ImageCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
