import { Component } from '@angular/core';

import { SimulationList } from '../../models/simulation-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public isLoad: boolean;
  public simulation: SimulationList[];

  getResultDashboardFilter(event = []) {

    this.simulation = event;

    console.log('simulation', this.simulation);
    console.log('event', event);

    console.log('event', event.length);
  }
}
