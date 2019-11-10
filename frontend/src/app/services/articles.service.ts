import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url: string;
  urlGet: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/api/articles';
    this.urlGet = 'http://localhost:3000/api/article/';
  }

  create(obj: any) {
    return this.http.post(this.url, obj);
  }

  getAll() {
    return this.http.get(this.url);
  }

  getById(id: any) {
    return this.http.get(this.urlGet + id);
  }


}
