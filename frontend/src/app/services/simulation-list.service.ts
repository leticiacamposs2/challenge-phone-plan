import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Simulation } from '../models/simulation';
import { SimulationList } from '../models/simulation-list';

const API_URL = 'http://localhost:3333/api/v1/simulation-list';

@Injectable({
  providedIn: 'root'
})
export class SimulationListService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  newSimulation(simulation: Simulation): Observable<SimulationList> {
    return this.httpClient.post<SimulationList>(API_URL, JSON.stringify(simulation), this.httpOptions)
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
