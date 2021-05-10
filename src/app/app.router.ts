import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";


const appRoutes: Routes = [
  {
  path: "vaccineTracker",
  loadChildren: () => import('./vaccine-tracker/vaccine-tracker.module').then(m => m.VaccineTrackerModule)
},
{
  path: "informationCenter",
  loadChildren: () => import('./information-center/information-center.module').then(m => m.InformationCenterModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRouterModule { }
