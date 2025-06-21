import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../../models/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class MockServerService {
  private http = inject(HttpClient);

  getPizzas(): Observable<{ data: Pizza[] }> {
    return this.http.get<{ data: Pizza[] }>('/pizzas/');
  }
}
