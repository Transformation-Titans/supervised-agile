import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotterComponent } from './kotter.component';

describe('KotterComponent', () => {
  let component: KotterComponent;
  let fixture: ComponentFixture<KotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
