import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApi {

  private readonly httpClient = inject(HttpClient);
  private readonly url = `${environment.backendUrl}/products`

  constructor() { }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  findById(id: number): any {
    return this.httpClient.get<Product>(`${this.url}/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  save(product: Partial<Product>): Observable<Product> {
    return this.httpClient.post<Product>(this.url, product);
  }
}
