import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResults } from '../pages/product/product.model';
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
}
