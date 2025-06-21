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
  title = '';

  @Input()
  description = '';

  @Input()
  image = '';

  @Input()
  backgroundColor = 'grey';

  @Input()
  color = 'black';
}
