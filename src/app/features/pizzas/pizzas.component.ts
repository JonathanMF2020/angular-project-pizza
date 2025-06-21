import { Component, inject, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { MockServerService } from '../../core/services/mock-server.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent implements OnInit {
  pizzas: Pizza[] = [];

  private mockServerService = inject(MockServerService);

  ngOnInit() {
    this.mockServerService.getPizzas().subscribe({
      next: (response) => {
        this.pizzas = response.data;
      },
      error: (err) => {
        console.error('Error loading pizzas', err);
      },
    });
  }
}
