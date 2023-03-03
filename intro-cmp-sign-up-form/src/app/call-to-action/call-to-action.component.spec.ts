import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallToActionComponent } from './call-to-action.component';
import { Component } from '@angular/core';

@Component({
  selector: 'sign-up-form', template: ''
})
export class SignUpFormComponent {}

@Component({
  selector: 'trial-banner', template: ''
})
export class TrialBannerComponent {}

describe('CallToActionComponent', () => {
  let component: CallToActionComponent;
  let fixture: ComponentFixture<CallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CallToActionComponent,
        SignUpFormComponent,
        TrialBannerComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
