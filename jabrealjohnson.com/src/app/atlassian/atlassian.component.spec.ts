import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlassianComponent } from './atlassian.component';

describe('AtlassianComponent', () => {
  let component: AtlassianComponent;
  let fixture: ComponentFixture<AtlassianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtlassianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlassianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
