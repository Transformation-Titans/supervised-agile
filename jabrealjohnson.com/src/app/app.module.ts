import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EngineeringComponent } from './engineering/engineering.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxTypedJsModule} from "ngx-typed-js";
import {DownloadFileService} from "./download-file.service";
import { CoachingComponent } from './coaching/coaching.component';
import { SocialactivismComponent } from './socialactivism/socialactivism.component';
import { AtlassianComponent } from './atlassian/atlassian.component';
import { TribeComponent } from './tribe/tribe.component';
import { MeasuringimpactComponent } from './measuringimpact/measuringimpact.component';
import { KotterComponent } from './kotter/kotter.component';
import { ServicenowComponent } from './servicenow/servicenow.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DatascienceComponent } from './datascience/datascience.component';

@NgModule({
  declarations: [
    RoutingComponents,
    AppComponent,
    EngineeringComponent,
    ResumeComponent,
    WorkshopsComponent,
    HomeComponent,
    CoachingComponent,
    SocialactivismComponent,
    AtlassianComponent,
    TribeComponent,
    MeasuringimpactComponent,
    KotterComponent,
    ServicenowComponent,
    NavigationComponent,
    DatascienceComponent
  ],
  imports: [
    HttpClientModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [DownloadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
