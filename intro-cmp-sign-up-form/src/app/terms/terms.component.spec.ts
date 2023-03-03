import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TermsComponent } from './terms.component';

describe('TermsComponent', () => {
  let component: TermsComponent;
  let fixture: ComponentFixture<TermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a child paragraph', () => {
    const childParagraph = fixture.debugElement.query(By.css('.terms__content')).nativeElement;
    expect(childParagraph).not.toBeNull();
    expect(childParagraph?.textContent).toContain('By clicking the button');
  });
  it('should render a terms link', () => {
    const termsLink = fixture.debugElement.query(By.css('a[href]')).nativeElement;
    expect(termsLink.textContent).toMatch('Terms and Services');
  });
});
