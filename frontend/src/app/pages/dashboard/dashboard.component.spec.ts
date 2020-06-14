import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar nenhum resultado', () => {
    const mockEvent = [];
    component.getResultDashboardFilter();
    expect(component.simulation).toEqual(mockEvent);
  });

  it('deve retornar o resultado da busca feita pelo filtro', () => {

    const mockEvent = [{
        excedentMinutos: 0,
        imgExcedentMinutos: 'https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif',
        standardPrice: 38,
        imgStandardPrice: 'https://media.giphy.com/media/a3zqvrH40Cdhu/giphy.gif'
    }];

    component.getResultDashboardFilter(mockEvent);
    expect(component.simulation).toEqual(mockEvent);
  });
});
