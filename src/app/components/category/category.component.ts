import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input()
  backgroundColor: string = 'black';

  @Input()
  label: string = '';

  @Input()
  stock: string = '';

  @Input()
  color: string = 'white';

  @Input()
  image: string = 'https://via.placeholder.com/150';
}
