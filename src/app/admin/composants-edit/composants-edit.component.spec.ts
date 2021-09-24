import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsEditComponent } from './composants-edit.component';

describe('ComposantsEditComponent', () => {
  let component: ComposantsEditComponent;
  let fixture: ComponentFixture<ComposantsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
