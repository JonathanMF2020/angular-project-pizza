import { Component } from '@angular/core';
import { LabelCounterComponent } from '../../components/label-counter/label-counter.component';
import { CategoryComponent } from '../../components/category/category.component';
import { ItemComponent } from '../../components/item/item.component';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [
    LabelCounterComponent,
    CategoryComponent,
    ItemComponent,
    IconComponent,
  ],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
})
export class DesignComponent {}
