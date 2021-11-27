import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

import Filmes from '../models/filmes.models';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getAll(page?, per_page?): Observable<Filmes> {
    page = typeof page !== "undefined" ? page : 1;
    let url_page = `?page=${page}`;
    url_page += `&per_page=${per_page}`
    return this.http.get<Filmes>(`${environment.baseApiUrl}/filmes${url_page}`)
                                .pipe(
                                map(obj =>obj),
                                catchError(e => this.errorHandler(e))
                                )
  }

  create(formData: FormData): Observable<Filmes> {
    return this.http.post<Filmes>(`${environment.baseApiUrl}/filmes`, formData)
  }

  getById(id?): Observable<Filmes> {
    
    return this.http.get<Filmes>(`${environment.baseApiUrl}/filmes/${id}`)
                                .pipe(
                                map(obj =>obj),
                                catchError(e => this.errorHandler(e))
                                )
  }

  errorHandler(e: any): Observable<any> {
    let errors = [];
    for(let er of e.error.message) {
      errors.push(er)
    }
    let str_errors = JSON.stringify(errors);
    throw new Error(str_errors)
    return EMPTY;
  }
}
