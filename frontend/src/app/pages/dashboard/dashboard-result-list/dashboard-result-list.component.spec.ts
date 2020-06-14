import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResultListComponent } from './dashboard-result-list.component';

describe('DashboardResultListComponent', () => {
  let component: DashboardResultListComponent;
  let fixture: ComponentFixture<DashboardResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
