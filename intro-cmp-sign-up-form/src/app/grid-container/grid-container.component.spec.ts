import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CallToActionComponent } from '../call-to-action/call-to-action.component';
// import { HeroComponent } from '../hero/hero.component';
import { Component } from '@angular/core';
import { GridContainerComponent } from './grid-container.component';

@Component({
  selector: 'hero', template: ''
})
export class HeroComponent {}

@Component({
  selector: 'call-to-action', template: ''
})
export class CallToActionComponent {}

describe('GridContainerComponent', () => {
  let component: GridContainerComponent;
  let fixture: ComponentFixture<GridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GridContainerComponent,
        HeroComponent, 
        CallToActionComponent
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
