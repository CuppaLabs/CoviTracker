import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { InformationCenterComponent } from "./information-center/information-center.component";


const infoRoutes: Routes = [{
  path: "",
  component: InformationCenterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(infoRoutes)],
  exports: [RouterModule],
})
export class InformationCenterRouterModule { }
