import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { PhonePlan } from '../models/phone-plan';

const API_URL = 'http://localhost:3333/api/v1/phone-plan';

@Injectable({
  providedIn: 'root'
})
export class PhonePlanService {

  constructor(private httpClient: HttpClient) { }

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
