import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpFormComponent } from './sign-up-form.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

@Component({
  selector: 'terms', template: ''
})
export class TermsComponent{}

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SignUpFormComponent,
        TermsComponent
      ], 
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('renders a form element with children', () => {
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    expect(form).not.toBeNull();
    expect(form.hasChildNodes).not.toBeNull();
  });
  it('renders 4 inputs', () => {
    const inputs = fixture.debugElement.queryAll(By.css('input'));
    expect(inputs.length).toBe(4);
  });
  it('renders without error message at reload ', () => {
    expect(fixture.debugElement.query(By.css('.error'))).toBeNull();
  });
  xit('renders a message when invalid inputs are passed', () => {
    const errorMessage = fixture.debugElement.query(By.css('.error')).nativeElement;
    const firstName = fixture.debugElement.query(By.css('#firstName')).nativeElement;
    firstName.setAttribute('value', 'pancake$');
    expect(errorMessage).not.toBeNull();
  })

  // pass both invalid & valid values and check that the errors display 
  // am i just validating the innerHTML? 
  // all inputs have label (parents/siblings)
});
