import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-result-list',
  templateUrl: './dashboard-result-list.component.html',
  styleUrls: ['./dashboard-result-list.component.css']
})
export class DashboardResultListComponent {

  @Input('excedent-minutos') excedentMinutos: number;
  @Input('standard-price') standardPrice: number;
  @Input('img-excedent-minutos') imgExcedentMinutos: string;
  @Input('img-standard-price') imgStandardPrice: string;
  @Input('img-not-found') imgNotFound: string;
  @Input('message') message: string;

}
