import { Component } from '@angular/core';
import { MockServerService } from '../../services/mock-server.service';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
