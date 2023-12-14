import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialactivismComponent } from './socialactivism.component';

describe('SocialactivismComponent', () => {
  let component: SocialactivismComponent;
  let fixture: ComponentFixture<SocialactivismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialactivismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialactivismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
