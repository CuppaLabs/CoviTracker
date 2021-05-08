import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineTrackerComponent } from './vaccine-tracker/vaccine-tracker.component';
import { VaccineTrackerRouterModule } from './vaccine-tracker.router';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [VaccineTrackerComponent],
  imports: [
    CommonModule,
    TableModule,
    VaccineTrackerRouterModule
  ]
})
export class VaccineTrackerModule { }
