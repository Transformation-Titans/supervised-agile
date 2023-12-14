import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologicalsafetyComponent } from './psychologicalsafety.component';

describe('PsychologicalsafetyComponent', () => {
  let component: PsychologicalsafetyComponent;
  let fixture: ComponentFixture<PsychologicalsafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologicalsafetyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychologicalsafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
