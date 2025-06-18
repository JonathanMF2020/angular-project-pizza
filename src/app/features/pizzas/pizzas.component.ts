import { Component } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { MockServerService } from '../../core/services/mock-server.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css',
})
export class PizzasComponent {
  pizzas: Pizza[] = [];

  constructor(private mockServerService: MockServerService) {}

  ngOnInit() {
    this.mockServerService.getPizzas().subscribe({
      next: (data) => {
        this.pizzas = data['data'];
      },
      error: (err) => {
        console.error('Error loading pizzas', err);
      },
    });
  }
}
