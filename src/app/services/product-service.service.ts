import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ProductServiceModel,
  ProductServiceResults,
} from '../pages/product-service/product-service.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
  }

  getServices(): Observable<ProductServiceResults> {
    return this.get('/services');
  }

  addService(body: ProductServiceModel): Observable<ProductServiceModel> {
    return this.post('/services', body);
  }
}
