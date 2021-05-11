import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class AppServices {

    public responseCache = new Map();


    statesCollection: BehaviorSubject<any> = new BehaviorSubject<any>({});
    districtsCollection: BehaviorSubject<any> = new BehaviorSubject<any>({});
    selectedDate: BehaviorSubject<any> = new BehaviorSubject<any>(moment(new Date(), 'DD-MM-YYYY', false).format('DD-MM-YYYY'));

    constructor(private http: HttpClient) { }
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
        const statesFromCache = this.responseCache.get(URL);
        if (statesFromCache) {
            return of(statesFromCache);
        }
        return this.http.get<any>(URL).pipe(map(data => {
            this.responseCache.set(URL, data);
            return data
        }));
    }
    getDistrictsByState(stateId: any): Observable<HttpResponse<any>> {
        return this.http.get<any>(
            environment.baseUrl + '/admin/location/districts/' + stateId);
    }
    getVaccineAvailabilityByDistrict(districtId: any, date: any): Observable<HttpResponse<any>> {
        const params = new HttpParams()
            .set('district_id', districtId)
            .set('date', date);
        return this.http.get<any>(`${environment.baseUrl}/appointment/sessions/public/calendarByDistrict?${params.toString()}`);
    }
    getAllTotals(): Observable<HttpResponse<any>> {
        return this.http.get<any>(
            'https://disease.sh/v3/covid-19/all');
    }
    getAllHistorical(): Observable<HttpResponse<any>> {
        return this.http.get<any>(
            'https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    }
}