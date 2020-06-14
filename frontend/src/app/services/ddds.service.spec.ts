import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DddsService } from './ddds.service';
import { DddsOfBrazil } from '../models/ddds-of-brazil';
import { HttpErrorResponse } from '@angular/common/http';

describe('DddsService', () => {
  let service: DddsService;
  let httpMock: HttpTestingController;
  let mockHeaders;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DddsService]
    });
    service = TestBed.inject(DddsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar os dados do INEP de todos os DDDs do Brasil', () => {
    const mockResponseDdds = {
      payload: [
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '21',
        '22',
        '24',
        '27',
        '28',
        '31',
        '32',
        '33',
        '34',
        '35',
        '37',
        '38',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48',
        '49',
        '51',
        '53',
        '54',
        '55',
        '61',
        '62',
        '63',
        '64',
        '65',
        '66',
        '67',
        '68',
        '69',
        '71',
        '73',
        '74',
        '75',
        '77',
        '79',
        '81',
        '82',
        '83',
        '84',
        '85',
        '86',
        '87',
        '88',
        '89',
        '91',
        '92',
        '93',
        '94',
        '95',
        '96',
        '97',
        '98',
        '99'
      ]
    };

    service.getDddsOfBrazil()
      .subscribe((ddds: DddsOfBrazil) => {
        expect(ddds.payload).toEqual(mockResponseDdds.payload);
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
