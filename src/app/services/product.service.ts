import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail, ProductResults } from '../pages/product/product.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getProducts(): Observable<ProductResults> {
    return this.get('/products');
  }

  getProduct(id: number): Observable<ProductDetail> {
    return this.get(`/products/${id}`);
  }

  addProduct(body: ProductDetail): Observable<ProductDetail> {
    return this.post('/products', body);
  }

  updateProduct(id: number, body: ProductDetail): Observable<ProductDetail> {
    return this.put(`/products/${id}`, body);
  }

  deleteProduct(id: number): Observable<unknown> {
    return this.delete(`/products/${id}`)
  }
}
