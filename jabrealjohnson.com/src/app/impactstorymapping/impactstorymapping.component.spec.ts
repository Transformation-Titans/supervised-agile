import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactstorymappingComponent } from './impactstorymapping.component';

describe('ImpactstorymappingComponent', () => {
  let component: ImpactstorymappingComponent;
  let fixture: ComponentFixture<ImpactstorymappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactstorymappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactstorymappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
