import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have links', () => {
    const links = document.querySelector('.footnotes__attribution a');
    expect(links).toBeDefined();
  });
  it('should contain a <ul>', () => {
    const  ul = document.querySelector('ul.footnotes__time-estimates');
    expect(ul).not.toBeNull();
  });
  it('should have list items', () => {
    const listItems = document.querySelectorAll('.time-estimates__item');
    expect(listItems).toBeDefined();
    expect(listItems).toHaveSize(2);
  });
});
