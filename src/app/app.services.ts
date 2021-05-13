import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";
import { TimestampObservableCache } from "./models/timestamp-observable-cache.model";

@Injectable()
export class AppServices {
    dataCache: { [id: string]: any};

    public responseCache = new Map();


    statesCollection: BehaviorSubject<any> = new BehaviorSubject<any>({});
    districtsCollection: BehaviorSubject<any> = new BehaviorSubject<any>({});
    selectedDate: BehaviorSubject<any> = new BehaviorSubject<any>(moment(new Date(), 'DD-MM-YYYY', false).format('DD-MM-YYYY'));

    constructor(private http: HttpClient) { 
        this.dataCache = {};
    }
    setDate(date) {
        this.selectedDate.next(moment(date, 'DD-MM-YYYY', false).format('DD-MM-YYYY'));
    }
    getDistricts(): Observable<HttpResponse<any>> {
        const URL = `${environment.webUrl}/assets/content/districts.json`;
        const districtsFromCache = this.responseCache.get(URL);
        if (districtsFromCache) {
            return of(districtsFromCache);
        }
        return this.http.get<any>(URL).pipe(map(data => {
            this.responseCache.set(URL, data);
            return data
        }));
    }
    getStates(): Observable<HttpResponse<any>> {
        const URL = `${environment.webUrl}/assets/content/states.json`;
        if (this.getCacheItem(URL)) {
            return this.getCacheItem(URL);
        }
        const observable = this.http.get<any>(URL).pipe(map(data => {
            return data
        }));
        this.setCacheItem(URL, observable);
        return observable;
    }
    getDistrictsByState(stateId: any): Observable<HttpResponse<any>> {
        return this.http.get<any>(
            environment.baseUrl + '/admin/location/districts/' + stateId);
    }
    getVaccineAvailabilityByDistrict(districtId: any, date: any): Observable<HttpResponse<any>> {
        const params = new HttpParams()
            .set('district_id', districtId)
            .set('date', date);
            const URL = `${environment.baseUrl}/appointment/sessions/public/calendarByDistrict?${params.toString()}`;
            if (this.getCacheItem(URL)) {
                return of(this.getCacheItem(URL));
            }
            return this.http.get<any>(URL).pipe(map(data => {
                this.setCacheItem(URL, data);
                return data
            }));
            
    }
    getAllTotals(): Observable<HttpResponse<any>> {
        return this.http.get<any>(
            'https://disease.sh/v3/covid-19/all');
    }
    getAllHistorical(): Observable<HttpResponse<any>> {
        return this.http.get<any>(
            'https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    }
    getCacheItem(key: string): any {
        let cacheItem = this.dataCache[key];
    
        if (!cacheItem) {
            return null;
        }
    
        // delete the cache item if it has expired
        if (cacheItem.expires <= Date.now()) {
            this.deleteCacheItem(key);
            return null;
        }
    
        return cacheItem?.data;
      }
    
      setCacheItem(key: string, value: any): void {
          const EXPIRES = Date.now() + (1000 * 60 * 60) / 2;
          this.dataCache[key] = { expires: EXPIRES, data: value };
      }
    
      deleteCacheItem(key: string) {
          delete this.dataCache[key];
      }
}