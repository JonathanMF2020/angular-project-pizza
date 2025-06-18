import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-counter',
  standalone: true,
  imports: [],
  templateUrl: './label-counter.component.html',
  styleUrl: './label-counter.component.css',
})
export class LabelCounterComponent {
  @Input()
  backgroundColor: string = 'black';

  @Input()
  textColor: string = 'white';

  @Input()
  number: number = 10;

  @Input()
  numberBackgroundColor: string = 'black';
}
