import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SimulationListService } from './simulation-list.service';
import { Simulation } from '../models/simulation';

describe('SimulationListService', () => {
  let service: SimulationListService;
  let httpMock: HttpTestingController;
  let mockHeaders;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SimulationListService]
    });
    service = TestBed.inject(SimulationListService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar os dados de uma nova simulação', () => {
    const mockResponseSimulation = {
        excedentMinutos: 0,
        imgExcedentMinutos: 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif',
        standardPrice: 38,
        imgStandardPrice: 'https://media.giphy.com/media/a3zqvrH40Cdhu/giphy.gif'
      };

    const mockSimulation: Simulation = {
        dddsOrigin: 11,
        dddsDestiny: 16,
        minute: '20',
        phonePlan: 'FaleMais 60'
      };

    service.newSimulation(mockSimulation)
      .subscribe((simulation) => {
        expect(simulation).toEqual(mockResponseSimulation);
      });

    const request = httpMock.expectOne(req => {
      return req.method === 'POST';
    });
  });

  it('deve retornar mensagem de erro do client', () => {

    const mockErrorEvent = new ErrorEvent('test', {
      error: new Error('teste'),
      message: 'test',
      lineno: 402,
      filename: 'test.html'
    });

    const mockErrorResponse: HttpErrorResponse = {
      error: mockErrorEvent,
      headers: mockHeaders,
      name: 'HttpErrorResponse',
      type: HttpErrorResponse[0],
      message: 'Http failure response for http://localhost:3333/api/v1/simulation-list/undefined: 404 Not Found',
      ok: false,
      status: 404,
      statusText: 'Not Found',
      url: 'http://localhost:3333/api/v1/simulation-list/undefined',
    };

    service.handleError(mockErrorResponse);
  });

  it('deve retornar mensagem de erro do servidor', () => {

    const mockErrorResponse: HttpErrorResponse = {
      error: { message: 'not exist' },
      headers: mockHeaders,
      name: 'HttpErrorResponse',
      type: HttpErrorResponse[0],
      message: 'Http failure response for http://localhost:3333/api/v1/simulation-list/undefined: 404 Not Found',
      ok: false,
      status: 404,
      statusText: 'Not Found',
      url: 'http://localhost:3333/api/v1/simulation-list/undefined',
    };

    service.handleError(mockErrorResponse);
  });
});
