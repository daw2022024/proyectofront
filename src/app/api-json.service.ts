import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Enumeración definida fuera de la clase
enum Endpoint {
  Home = 'home',
  Catalog = 'catalog',
  Category = 'category/',
  Subcategory = 'subcategory',
  Product = 'product'
}

@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {

  private url = 'http://200.234.239.230:8181/';

  constructor(private http: HttpClient) { }

  getEndpointUrl(endpoint: string, id?: number) {
    if (endpoint != 'category/') {
      if (id) {
        return `${this.url}${endpoint}/${id}`;
      } else {
        return `${this.url}${endpoint}`;
      }
    } else {if (id) {
      return `${this.url}${endpoint}${id}`;
    } else {
      return `${this.url}${endpoint}`;
    }
    }
  }

  fetchData(endpoint: string, id?: number) {
    let endpointUrl = this.getEndpointUrl(endpoint, id);
    return this.http.get(endpointUrl);
  }

  home() {
    return this.fetchData(Endpoint.Home);
  }

  catalog() {
    return this.fetchData(Endpoint.Catalog);
  }

  category(id?: number) {
    return this.fetchData(Endpoint.Category, id);
  }

  subcategory(id: number) {
    return this.fetchData(Endpoint.Subcategory, id);
  }

  product(id: number) {
    return this.fetchData(Endpoint.Product, id);
  }
}
