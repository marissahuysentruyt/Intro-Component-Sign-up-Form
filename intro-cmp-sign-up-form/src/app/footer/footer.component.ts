import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  timeEstimate = '8:00'
  timeCompleted = '4:00'
}
