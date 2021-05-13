import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { FilterService } from 'primeng/api';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AppServices } from 'src/app/app.services';

@Component({
  selector: 'app-district-details',
  templateUrl: './district-details.component.html',
  styleUrls: ['./district-details.component.scss']
})
export class DistrictDetailsComponent implements OnInit {
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
  selectedAgeOptions: any = [    {
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
  }];
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
    vaccineBrand: any = 'All';
    ageGroup: any = 'All';
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
      this.filterList();
      this.loading = false;
    });
    this.fetchCheckedIDs();
  }
  changeSelection(item){
    item.isChecked = !item.isChecked;
    this.fetchSelectedItems();
  }
  fetchSelectedItems() {
    this.selectedAgeOptions = this.ageOptions.filter((value, index) => {
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
    if(this.ageGroup !== 'All' && this.vaccineBrand == 'All'){
      let filteredArray = this.cachedCenters.filter((element) => element.sessions.some((subElement) => subElement.min_age_limit === parseInt(this.ageGroup)));
      this.centers = filteredArray;
    }
    else if(this.ageGroup !== 'All' && this.vaccineBrand !== 'All'){
      let filteredArray = this.cachedCenters.filter((element) => element.sessions.some((subElement) => subElement.min_age_limit === parseInt(this.ageGroup) && subElement.vaccine == this.vaccineBrand));
      this.centers = filteredArray;
    }
    else if(this.ageGroup == 'All' && this.vaccineBrand !== 'All'){
      let filteredArray = this.cachedCenters.filter((element) => element.sessions.some((subElement) => subElement.vaccine == this.vaccineBrand));
      this.centers = filteredArray;
    }
    else {
      this.centers = this.cachedCenters;
    }

  }
  changeBrand(brand: any){
    this.filterList();
  }
  changeAge(age: any) {
    this.filterList();
  }
  openMap(center){
    window.open('http://maps.google.com/?q='+center.name+' '+center.address+' '+center.pincode);
  }


}
