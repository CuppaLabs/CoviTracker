import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { VaccineTrackerComponent } from "./vaccine-tracker/vaccine-tracker.component";


const appRoutes: Routes = [{
  path: "",
  component: VaccineTrackerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class VaccineTrackerRouterModule { }
