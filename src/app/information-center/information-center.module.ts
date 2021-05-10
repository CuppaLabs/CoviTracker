import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationCenterComponent } from './information-center/information-center.component';
import { InformationCenterRouterModule } from './information-center.router';
import { DisqusModule } from 'ngx-disqus';



@NgModule({
  declarations: [InformationCenterComponent],
  imports: [
    CommonModule,
    DisqusModule.forRoot('ngx'),
    InformationCenterRouterModule
  ]
})
export class InformationCenterModule { }
