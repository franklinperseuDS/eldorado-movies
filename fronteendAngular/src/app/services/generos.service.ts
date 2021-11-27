import { environment } from "../../environments/environment"
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${environment.baseApiUrl}/generos`)
                          .pipe(
                            map(obj =>obj),
                            catchError(e => this.errorHandler(e))
                            )
  }
 


  errorHandler(e: any): Observable<any> {
    alert(e.message)
    return EMPTY;
  }
}
