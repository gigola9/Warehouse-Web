import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getUser() {
    return localStorage.getItem('nickname');
  }

  addProduct(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Products/Addprocut`, obj);
  }

  importProduct(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Products/ImportProduct`, obj);
  }

  exportProduct(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Products/ExportProduct`, obj);
  }

  addUser(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Auth/Adduser`, obj);
  }

  editUser(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Auth/EditUser`, obj);
  }

  manageProduct(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Products/Manageproducts`, obj);
  }

  addWarehosue(obj: any) {
    return this.http.post(`${environment.endpoint}/api/Warehouse/AddWarehouse`, obj);
  }
}
