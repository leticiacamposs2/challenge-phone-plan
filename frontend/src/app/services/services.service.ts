import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { DddsOfBrazil } from '../models/ddds-of-brazil';
import { PhonePlan } from '../models/phone-plan';

const API_DDDS_URL = 'http://ddd.pricez.com.br/ddds.json';
const API_PHONE_PLAN_URL = 'http://localhost:3333/api/v1/phone-plan';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getDddsOfBrazil(): Observable<DddsOfBrazil> {
    return this.httpClient.get<DddsOfBrazil>(API_DDDS_URL)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getPhonePlan(): Observable<any> {
    return this.httpClient.get('/api/v1/phone-plan')
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
