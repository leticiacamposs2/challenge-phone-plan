import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { DashboardFilterComponent } from './dashboard-filter.component';
import { ServicesService } from '../../services/services.service';

describe('DashboardFilterComponent', () => {
  let component: DashboardFilterComponent;
  let fixture: ComponentFixture<DashboardFilterComponent>;
  let service: ServicesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFilterComponent ],
      imports: [HttpClientModule],
      providers: [ServicesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFilterComponent);
    service = TestBed.inject(ServicesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar os DDDS do Brasil', () => {
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

    const spyGetDddsOfBrazil = spyOn(service, 'getDddsOfBrazil')
      .and.returnValue(of(mockDdds));

    component.getDDDs();

    expect(spyGetDddsOfBrazil).toHaveBeenCalled();
  });
});
