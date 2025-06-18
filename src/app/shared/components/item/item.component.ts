import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-item',
  imports: [MatIconModule, IconComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  standalone: true,
})
export class ItemComponent {
  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  image: string = '';

  @Input()
  backgroundColor: string = 'grey';

  @Input()
  color: string = 'black';
}
