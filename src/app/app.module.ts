import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { SoilComponent } from './soil/soil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartFormComponent } from './start-form/start-form.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavigationComponent } from './navigation/navigation.component';
import { ClimateComponent } from './climate/climate.component';

import { AgmCoreModule } from '@agm/core';
import { NutrientsSelectorComponent } from './nutrients-selector/nutrients-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoilComponent,
    StartFormComponent,
    NavigationComponent,
    ClimateComponent,
    NutrientsSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
       AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAui8Mtcn76jqn0FCKvN3G3X_0Woudb02s',
         libraries: ['places']
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
