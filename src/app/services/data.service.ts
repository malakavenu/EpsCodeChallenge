import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../table/product';

const apiUrl = 'http://usweb.dotomi.com/resources/swfs/cookies.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    // return this.httpClient.get<any>(apiUrl)
    //   .toPromise()
    //   .then(res => <Product[]>res.data)
    //   .then(data => { return data; });
    return this.httpClient.get(apiUrl);
  }
}
