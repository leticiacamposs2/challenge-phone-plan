import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
