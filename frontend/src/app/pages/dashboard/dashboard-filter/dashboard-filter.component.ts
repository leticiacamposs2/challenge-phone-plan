import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DddsService } from 'src/app/services/ddds.service';
import { PhonePlanService } from 'src/app/services/phone-plan.service';
import { SimulationListService } from 'src/app/services/simulation-list.service';
import { DddsOfBrazil } from 'src/app/models/ddds-of-brazil';
import { Simulation } from 'src/app/models/simulation';

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.css']
})
export class DashboardFilterComponent implements OnInit {

  public dddsOfBrazil;
  public planFaleMais = [];
  public formFilter: FormGroup;

  @Output('resultFilter') resultFilterEmit = new EventEmitter<number>();

  constructor(private dddsService: DddsService,
              private phonePlanService: PhonePlanService,
              private simulationService: SimulationListService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setDashboardFilter();
  }

  setDashboardFilter(): void {
    this.formFilter = this.formBuilder.group({
      dddsOrigin: [this.getDDDs(), Validators.required],
      dddsDestiny: [this.getDDDs(), Validators.required],
      minute: ['', Validators.required],
      phonePlan: [this.getPhonePlan(), Validators.required]
    });
  }

  async getDDDs() {
    this.dddsService.getDddsOfBrazil()
      .subscribe((ddds: DddsOfBrazil) => {
        this.dddsOfBrazil = ddds.payload;
      });
  }

  async getPhonePlan() {
    this.phonePlanService.getPhonePlan()
      .subscribe(res => {
        res.forEach(item => {
          this.planFaleMais.push(item.plan);
        });
      });
  }

  async findDashboard() {
    const filter = this.formFilter.getRawValue() as Simulation;

    this.simulationService
      .newSimulation(filter)
      .subscribe(res => this.emitResultFilter(res));
  }

  ifFormValid(): boolean {
    return !this.formFilter.valid;
  }

  emitResultFilter(resultFilter) {
    this.resultFilterEmit.emit(resultFilter);
  }

}
