import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringimpactComponent } from './measuringimpact.component';

describe('MeasuringimpactComponent', () => {
  let component: MeasuringimpactComponent;
  let fixture: ComponentFixture<MeasuringimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuringimpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasuringimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
