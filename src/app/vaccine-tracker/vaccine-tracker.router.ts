import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { VaccineTrackerComponent } from "./vaccine-tracker/vaccine-tracker.component";
import { DistrictDetailsComponent } from "./district-details/district-details.component";


const vaccineRoutes: Routes = [
  {
    path: "",
    component: VaccineTrackerComponent,
    children: [
      {
        path: "district/:id",
        component: DistrictDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(vaccineRoutes)],
  exports: [RouterModule],
})
export class VaccineTrackerRouterModule { }
