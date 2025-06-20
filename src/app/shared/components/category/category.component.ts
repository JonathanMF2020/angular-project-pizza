import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input()
  backgroundColor = 'black';

  @Input()
  label = '';

  @Input()
  stock = '';

  @Input()
  color = 'white';

  @Input()
  image = 'https://via.placeholder.com/150';
}
