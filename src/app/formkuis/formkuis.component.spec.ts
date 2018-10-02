import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormkuisComponent } from './formkuis.component';

describe('FormkuisComponent', () => {
  let component: FormkuisComponent;
  let fixture: ComponentFixture<FormkuisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormkuisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormkuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
