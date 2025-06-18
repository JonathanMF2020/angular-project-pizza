import { Component } from '@angular/core';
import { LabelCounterComponent } from '../../shared/components/label-counter/label-counter.component';
import { CategoryComponent } from '../../shared/components/category/category.component';
import { ItemComponent } from '../../shared/components/item/item.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
  standalone: true,
  imports: [
    LabelCounterComponent,
    CategoryComponent,
    ItemComponent,
    IconComponent,
  ],
})
export class DesignComponent {}
