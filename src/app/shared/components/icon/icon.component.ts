import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
  imports: [MatIconModule],
  standalone: true,
})
export class IconComponent {
  @Input()
  backgroundColor: string = 'grey';

  @Input()
  color: string = 'black';
}
