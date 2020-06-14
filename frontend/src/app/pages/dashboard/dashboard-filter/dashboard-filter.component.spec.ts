import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { DddsService } from 'src/app/services/ddds.service';
import { PhonePlanService } from 'src/app/services/phone-plan.service';
import { SimulationListService } from '../../../services/simulation-list.service';
import { DashboardFilterComponent } from './dashboard-filter.component';
import { Simulation } from '../../../models/simulation';

describe('DashboardFilterComponent', () => {
  let component: DashboardFilterComponent;
  let fixture: ComponentFixture<DashboardFilterComponent>;
  let dddsService: DddsService;
  let phonePlanService: PhonePlanService;
  let simulationService: SimulationListService;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFilterComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        DddsService,
        PhonePlanService,
        SimulationListService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(inject([FormBuilder], (formBuilder: FormBuilder) => {
    fixture = TestBed.createComponent(DashboardFilterComponent);
    dddsService = TestBed.inject(DddsService);
    phonePlanService = TestBed.inject(PhonePlanService);
    simulationService = TestBed.inject(SimulationListService);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.formFilter = formBuilder.group({
      dddsOrigin: ['', Validators.required],
      dddsDestiny: ['', Validators.required],
      minute: ['', Validators.required],
      phonePlan: ['FaleMais 20', Validators.required]
    });
  })));

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o serviço que retornar os DDDS do Brasil', () => {
    const mockDdds = {
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

    const spyGetDddsOfBrazil = spyOn(dddsService, 'getDddsOfBrazil')
      .and.returnValue(of(mockDdds));

    component.getDDDs();

    expect(spyGetDddsOfBrazil).toHaveBeenCalled();
  });

  it('deve chamar o serviço que retorna os planos de telefone disponíveis da FaleMais', () => {
    const mockPhonePlan = [
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

    const spyGetPhoneplan = spyOn(phonePlanService, 'getPhonePlan')
      .and.returnValue(of(mockPhonePlan));

    component.getPhonePlan();

    expect(spyGetPhoneplan).toHaveBeenCalled();
  });

  it('deve buscar os dados de acordo com o filtro realizado', () => {
    const mockFilter: Simulation = {
      dddsOrigin: 11,
      dddsDestiny: 16,
      minute: '20',
      phonePlan: 'FaleMais 60'
    };

    const mockSimulation = {
      excedentMinutos: 0,
      imgExcedentMinutos: 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif',
      standardPrice: 38,
      imgStandardPrice: 'https://media.giphy.com/media/a3zqvrH40Cdhu/giphy.gif'
    };

    const spySimulation = spyOn(simulationService, 'newSimulation')
      .withArgs(mockFilter).and.returnValue(of(mockSimulation));

    component.findDashboard();

    expect(spySimulation).toHaveBeenCalled();
    expect(component.emitResultFilter(mockSimulation)).toHaveBeenCalled();
  });

  it('deve retornar true quando os campos obrigatórios do formulário não for preenchido', () => {

  });
});
