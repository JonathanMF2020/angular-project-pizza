import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-counter',
  imports: [],
  standalone: true,
  templateUrl: './label-counter.component.html',
  styleUrl: './label-counter.component.css',
})
export class LabelCounterComponent {
  @Input()
  backgroundColor = 'black';

  @Input()
  textColor = 'white';

  @Input()
  number = 10;

  @Input()
  numberBackgroundColor = 'black';
}
