import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBowlingComponent } from './form-bowling.component';

describe('FormBowlingComponent', () => {
  let component: FormBowlingComponent;
  let fixture: ComponentFixture<FormBowlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBowlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBowlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
