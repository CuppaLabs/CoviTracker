import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import * as moment from 'moment';
import { FilterService } from 'primeng/api';
import { combineLatest, Observable, of, pipe } from 'rxjs';
import { ignoreElements, map, switchMap } from 'rxjs/operators';
import { AppServices } from 'src/app/app.services';
import { CheckForUpdateService } from 'src/app/check-for-update.service';

@Component({
  selector: 'app-vaccine-tracker',
  templateUrl: './vaccine-tracker.component.html',
  styleUrls: ['./vaccine-tracker.component.scss']
})
export class VaccineTrackerComponent implements OnInit {
  districts: any = [];
  routeData$: Observable<any>;
  districtSearch: any = '';
  stateSearch: any = 'All';
  states: any = [];
  constructor(private appService: AppServices, public updates: SwUpdate, private checkForUpdateService: CheckForUpdateService,
     private router: Router, private activatedRoute: ActivatedRoute){
  }
  ngOnInit(){
    
    combineLatest([this.appService.getDistricts(), this.appService.getStates()])
    .pipe()
    .subscribe(([districts, states]: any) => {
      this.districts = districts;
      this.states = states.states;
      const statesCollection = {};
      const districtsCollection = {};
      states.states.forEach(state => {
        statesCollection[state.state_id] = state.state_name;
      });
      districts.forEach(district => {
        districtsCollection[district.district_id] = district;
      })

      this.appService.statesCollection.next(statesCollection);
      this.appService.districtsCollection.next(districtsCollection);
    })
  }
}
