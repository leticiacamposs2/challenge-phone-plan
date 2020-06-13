import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { DddsOfBrazil } from '../models/ddds-of-brazil';

const API_URL = 'http://ddd.pricez.com.br/ddds.json';

@Injectable({
  providedIn: 'root'
})
export class DddsService {

  constructor(private httpClient: HttpClient) { }

  getDddsOfBrazil(): Observable<DddsOfBrazil> {
    return this.httpClient.get<DddsOfBrazil>(API_URL)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
