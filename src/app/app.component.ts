import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AppServices } from './app.services';
import { CheckForUpdateService } from './check-for-update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  districts: any = [];
  routeData$: Observable<any>;
  districtSearch: any = '';
  stateSearch: any = 'All';
  states: any = [];
  constructor(private appService: AppServices, public updates: SwUpdate, private checkForUpdateService: CheckForUpdateService,
     private router: Router, private activatedRoute: ActivatedRoute){
    this.updates.available.subscribe((event) => {
      this.updateToLatest();
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
  showInfo(link){
  }
  updateToLatest(): void {
    console.log('Updating to latest version.');
    this.updates.activateUpdate().then(() => document.location.reload());
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
      if(!this.router.url.includes('vaccineTracker/district')){
        this.router.navigate(['vaccineTracker/district/582']);
      }
      this.appService.statesCollection.next(statesCollection);
      this.appService.districtsCollection.next(districtsCollection);
    })
  }
}
