import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from './daterangepicker/clickoutside.directive';
import { NgbdDatepickerRangePopup } from './daterangepicker/daterange-picker.component';
import { SearchPipe } from './filter.pipe';


@NgModule({
  declarations: [NgbdDatepickerRangePopup, SearchPipe, ClickOutsideDirective],
  imports: [
    FormsModule,
    NgbModule
  ],
  exports: [CommonModule,
    FormsModule,
    NgbModule, NgbdDatepickerRangePopup, SearchPipe, ClickOutsideDirective],
    providers: [SearchPipe]
})
export class SharedModule { }
