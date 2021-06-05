import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  addProduct(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Products/Addprocut`, obj);
  }

  importProduct(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Products/ImportProduct`, obj);
  }

  exportProduct(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Products/ExportProduct`, obj);
  }

  getUser() {
    return localStorage.getItem('nickname');
  }
}
