import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockServerService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<any> {
    return this.http.get('/pizzas/');
  }
}
