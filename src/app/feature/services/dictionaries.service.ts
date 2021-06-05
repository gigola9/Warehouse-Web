import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionariesService {

  constructor(private http: HttpClient) { }

  getCategorytDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/CategoryDictionary`);
  }

  getProductDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/ProductDictionary`);
  }

  getStorageDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/StorageDictionary`);
  }

  getActivitiyDictionary() {
    return this.http.get(`${environment.endpoint}/api/Dictionaries/ActivitiyDictionary`);
  }
}
