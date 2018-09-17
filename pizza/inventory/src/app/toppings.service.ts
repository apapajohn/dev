import { Topping } from './toppings/topping';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {
  NEW_PIZZA_COMPONENT_PATH = '/pizzacomponent';
  constructor(private http: HttpClient) { }

  save( top: Topping): Observable<Topping> {
    return this.http.post<Topping>(this.NEW_PIZZA_COMPONENT_PATH, top);
        
  }
}
