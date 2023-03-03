import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { TrialBannerComponent } from './trial-banner.component';

describe('TrialBannerComponent', () => {
  let component: TrialBannerComponent;
  let fixture: ComponentFixture<TrialBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the trial banner', () => {
    expect(component).toBeTruthy();
  });
  it('should have a child paragraph', () => {
    const trialBanner = document.querySelector('.cta');
    expect(trialBanner?.hasChildNodes).toBeTruthy();
  });
  it('paragraph span should contain text', () => {
    const trialText = document.querySelector('.bold');
    expect(trialText?.textContent).toMatch('Try it free for 7 days')
  });
});
