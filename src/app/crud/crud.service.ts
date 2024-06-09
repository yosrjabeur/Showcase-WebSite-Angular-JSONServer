import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../model/product';
import { Observable, map } from 'rxjs';
import Swal from 'sweetalert2'; 

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(searchTerm: string='', page: number = 1, pageSize: number = 3): Observable<HttpResponse<any>> {
    let apiUrlke = `${this.apiUrl}?_page=${page}&_limit=${pageSize}&nom_like=${searchTerm}`;
  
    return this.http.get<any>(apiUrlke, { observe: 'response' });
  }
  
  getProductById(id: number): Observable<product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<product>(url);
  }
  
  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  updateProduct(product: product): Observable<any> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.patch(url, product);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }
  getFavorites(): Observable<product[]> {
    return this.http.get<product[]>(`${this.apiUrl}?cheked=true`);
  }

}
