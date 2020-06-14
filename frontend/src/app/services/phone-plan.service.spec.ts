import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PhonePlanService } from './phone-plan.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('PhonePlanService', () => {
  let service: PhonePlanService;
  let httpMock: HttpTestingController;
  let mockHeaders;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhonePlanService]
    });
    service = TestBed.inject(PhonePlanService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar os dados de planos disponíveis da FaleMais', () => {
    const mockResponsePhonePlan = [
        {
          id: 1,
          plan: 'FaleMais 30',
          minute: 30
        },
        {
          id: 2,
          plan: 'FaleMais 60',
          minute: 60
        },
        {
          id: 3,
          plan: 'FaleMais 120',
          minute: 120
        }
      ];

    service.getPhonePlan()
        .subscribe((plan) => {
          expect(plan).toEqual(mockResponsePhonePlan);
        });

    const request = httpMock.expectOne(req => {
      return req.method === 'GET';
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
