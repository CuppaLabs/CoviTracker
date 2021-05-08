import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";


const appRoutes: Routes = [{
  path: "vaccineTracker/district/:id",
  loadChildren: () => import('./vaccine-tracker/vaccine-tracker.module').then(m => m.VaccineTrackerModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRouterModule { }
