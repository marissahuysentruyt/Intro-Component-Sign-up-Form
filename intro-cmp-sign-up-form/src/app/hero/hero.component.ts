import { Component } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['../../scss/components/_hero.component.scss']
})
export class HeroComponent {
  heading = "Learn to code by watching others"
  subheading = "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
}
