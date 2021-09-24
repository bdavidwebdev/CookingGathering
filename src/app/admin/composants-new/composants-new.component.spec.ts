import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsNewComponent } from './composants-new.component';

describe('ComposantsNewComponent', () => {
  let component: ComposantsNewComponent;
  let fixture: ComponentFixture<ComposantsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
