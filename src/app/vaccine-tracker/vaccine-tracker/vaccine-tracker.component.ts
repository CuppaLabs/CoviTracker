import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FilterService } from 'primeng/api';
import { combineLatest, of, pipe } from 'rxjs';
import { ignoreElements, map, switchMap } from 'rxjs/operators';
import { AppServices } from 'src/app/app.services';

@Component({
  selector: 'app-vaccine-tracker',
  templateUrl: './vaccine-tracker.component.html',
  styleUrls: ['./vaccine-tracker.component.scss']
})
export class VaccineTrackerComponent implements OnInit {
  centers: any[] = []
  cachedCenters: any = [];
  frozenValue: any[];
  
  dialogVisible: boolean;
  loading: boolean = true
  scrollableCols: any[];

  frozenCols: any[];
  statesCollection: any = {};
  districtsCollection: any= {};
  districtId: any = 0;
  week: any = [];
  selectedCities: string[] = [];
  checkedIDs: any = [];
  selectedItemsList: any = [];
  ageOptions = [
    {
      id: 'C001',
      label: '18+',
      isChecked: true,
      value: 18
    },
    {
      id: 'C002',
      label: '45+',
      isChecked: true,
      value: 45
    }]
  constructor(private filterService: FilterService, private router:Router, private route: ActivatedRoute, private appService: AppServices) { 
    
  }

  ngOnInit(): void {
    this.loading = true;
    const districtId = combineLatest([this.route.params, this.appService.statesCollection,
      this.appService.districtsCollection, this.appService.selectedDate])
    .pipe(
      switchMap(([params, states, districts, date]: any) => {
        this.statesCollection = states;
        this.districtsCollection = districts;
        this.districtId = params.id;
        const navigation = this.router.getCurrentNavigation();
        if(Object.keys(states).length && Object.keys(districts).length){
          this.week = [];
          for (let i = 0; i < 7; i++) {
            this.week.push(moment(date, 'DD-MM-YYYY', false).add(i, 'days').format('MMMM D'))
          }
          return this.appService.getVaccineAvailabilityByDistrict(params.id, date)
        }
        else {
          return of({centers: []});
        }
      }),
      map(data => {
        return data;
      })
    ).subscribe((data: any) => {
      this.centers = data.centers;
      this.cachedCenters = data.centers;
      this.loading = false;
    });
    this.fetchCheckedIDs();
  }
  changeSelection(item){
    item.isChecked = !item.isChecked;
    this.fetchSelectedItems();
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.ageOptions.filter((value, index) => {
      return value.isChecked
    });
    this.filterList();
  }
 fetchCheckedIDs() {
    this.checkedIDs = []
    this.ageOptions.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }
  filterList(){
    if(this.selectedItemsList.length == 1){
      let filteredArray = this.centers.filter((element) => element.sessions.some((subElement) => subElement.min_age_limit === this.selectedItemsList[0].value));
      this.centers = filteredArray;
    }
    else {
      this.centers = this.cachedCenters;
    }

  }
  openMap(center){
    window.open('http://maps.google.com/?q='+center.name+' '+center.address+' '+center.pincode);
  }

}
