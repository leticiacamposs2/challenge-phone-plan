import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../../services/services.service';
import { DddsOfBrazil } from '../../models/ddds-of-brazil';

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.css']
})
export class DashboardFilterComponent implements OnInit {

  public dddsOfBrazil;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getDDDs();
  }

  async getDDDs() {
    await this.service.getDddsOfBrazil()
      .subscribe((ddds: DddsOfBrazil) => {
        this.dddsOfBrazil =  ddds.payload;
      });
  }

}
