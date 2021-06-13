import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesModel } from '../../shared/models/ActivitiesModel';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {

  constructor(private http: HttpClient) { }

  getCategorytDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/CategoryDictionary`);
  }

  getPendingProductDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/PendingProductDictionary`);
  }

  getProductDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/ProductDictionary`);
  }

  getStorageDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/StorageDictionary`);
  }

  getWarehouseDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/WarehouseDictionary`);
  }

  getUserDictionary(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.endpoint}/api/Dictionaries/UserDictionary`);
  }

  getActivitiyDictionary(): Observable<ActivitiesModel[]> {
    return this.http.get<ActivitiesModel[]>(`${environment.endpoint}/api/Dictionaries/ActivitiyDictionary`);
  }
}
