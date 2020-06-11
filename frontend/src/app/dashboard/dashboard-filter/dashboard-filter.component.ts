import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServicesService } from '../../services/services.service';
import { DddsOfBrazil } from '../../models/ddds-of-brazil';
import { DashboardFilter } from './dashboard-filter';

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.css']
})
export class DashboardFilterComponent implements OnInit {

  public dddsOfBrazil;
  public formFilter: FormGroup;

  @Output('resultFilter') resultFilterEmit = new EventEmitter<number>();

  constructor(private service: ServicesService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setDashboardFilter();
  }

  setDashboardFilter(): void {
    this.formFilter = this.formBuilder.group({
      dddsOrigin: [this.getDDDs(), Validators.required],
      dddsDestiny: [this.getDDDs(), Validators.required],
      duration: ['', Validators.required],
      phonePlan: ['', Validators.required]
    });
  }

  async getDDDs() {
    await this.service.getDddsOfBrazil()
      .subscribe((ddds: DddsOfBrazil) => {
        this.dddsOfBrazil =  ddds.payload;
      });
  }

  findDashboard() {
    const filter = this.formFilter.getRawValue() as DashboardFilter;

    const result = {
      dddOrigin: filter.dddsOrigin,
      dddsDestiny: filter.dddsDestiny,
      duration: filter.duration,
      phonePlan: filter.phonePlan
    };

    this.emitResultFilter(result);
  }

  ifFormValid(): boolean {
    return !this.formFilter.valid;
  }

  emitResultFilter(resultFilter) {
    this.resultFilterEmit.emit(resultFilter);
  }

}
