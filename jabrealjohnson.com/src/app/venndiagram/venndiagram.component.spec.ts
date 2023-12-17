import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenndiagramComponent } from './venndiagram.component';

describe('VenndiagramComponent', () => {
  let component: VenndiagramComponent;
  let fixture: ComponentFixture<VenndiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenndiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenndiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
