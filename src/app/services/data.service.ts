import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../table/product';

const apiUrl = 'assets/data/product.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(apiUrl);
  }
}
