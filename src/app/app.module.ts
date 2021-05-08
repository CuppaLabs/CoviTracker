import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CheckForUpdateService } from './check-for-update.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsenseModule } from 'ng2-adsense';
import { VaccineTrackerModule } from './vaccine-tracker/vaccine-tracker.module';
import { AppServices } from './app.services';
import { SearchPipe } from './filter.pipe';
import { NgbdDatepickerRangePopup } from './daterangepicker/daterange-picker.component';
import { ClickOutsideDirective } from './daterangepicker/clickoutside.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    NgbdDatepickerRangePopup,
    ClickOutsideDirective
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule,
    VaccineTrackerModule,
    AdsenseModule.forRoot(),
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [AppServices, CheckForUpdateService],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
