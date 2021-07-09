import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientsSelectorComponent } from './nutrients-selector.component';

describe('NutrientsSelectorComponent', () => {
  let component: NutrientsSelectorComponent;
  let fixture: ComponentFixture<NutrientsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
