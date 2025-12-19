import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public url: string;
  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;
  }

  post(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.post(`${this.url}${endpoint}`, body, reqOpts);
  }

  get(endpoint: string, reqOpts?: any): Observable<any> {
    return this.http.get(`${this.url}${endpoint}`, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.put(`${this.url}${endpoint}`, body, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.patch(`${this.url}${endpoint}`, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any): Observable<any> {
    return this.http.delete(`${this.url}${endpoint}`, reqOpts);
  }
}
