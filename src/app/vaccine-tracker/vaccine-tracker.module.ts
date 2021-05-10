import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineTrackerComponent } from './vaccine-tracker/vaccine-tracker.component';
import { VaccineTrackerRouterModule } from './vaccine-tracker.router';
import {TableModule} from 'primeng/table';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { AdsenseModule } from 'ng2-adsense';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [VaccineTrackerComponent, DistrictDetailsComponent],
  imports: [
    TableModule,
    FormsModule,
    SharedModule,
    AdsenseModule.forRoot(),
    VaccineTrackerRouterModule
  ]
})
export class VaccineTrackerModule { }
