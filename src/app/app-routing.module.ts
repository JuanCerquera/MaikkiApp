import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import {SoilComponent} from "./soil/soil.component";
import {ClimateComponent} from "./climate/climate.component";
import {StartFormComponent} from "./start-form/start-form.component";
//Routes
const routes: Routes = [
  {path: 'soil', component: SoilComponent},
  {path: 'climate', component: ClimateComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
