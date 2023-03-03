import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
@Component({
  selector: 'hero', template: ''
})
export class HeroComponent {}

@Component({
  selector: 'grid-container', template: ''
})
export class GridContainerComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        AppComponent, 
        GridContainerComponent, 
        HeroComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have component title 'intro-cmp-sign-up-form'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('intro-cmp-sign-up-form');
  });
  it('should have a footer with a footnotes class name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const footer = fixture.debugElement.query(By.css('.footnotes')).nativeElement;
    expect(footer).not.toBeNull();
  })
});
