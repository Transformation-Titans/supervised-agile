import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {EngineeringComponent} from './engineering/engineering.component';
import {WorkshopsComponent} from './workshops/workshops.component';
import {HomeComponent} from './home/home.component';
import {PsychologicalsafetyComponent} from "./psychologicalsafety/psychologicalsafety.component";
import {OkrsComponent} from "./okrs/okrs.component";
import {ImpactstorymappingComponent} from "./impactstorymapping/impactstorymapping.component";
import {CoachingComponent} from "./coaching/coaching.component";
import { SocialactivismComponent } from './socialactivism/socialactivism.component';
import {AtlassianComponent} from "./atlassian/atlassian.component";
import {TribeComponent} from "./tribe/tribe.component";
import {MeasuringimpactComponent} from "./measuringimpact/measuringimpact.component";
import {KotterComponent} from "./kotter/kotter.component";
import {ServicenowComponent} from "./servicenow/servicenow.component";


const routes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: 'engineering', component: EngineeringComponent},
  {path: 'workshops', component: WorkshopsComponent},
  {path: 'pschsafety', component: PsychologicalsafetyComponent},
  {path: 'okrs', component: OkrsComponent},
  {path: 'impactstory', component: ImpactstorymappingComponent},
  {path: 'coaching', component: CoachingComponent},
  {path: 'socialactivism', component: SocialactivismComponent},
  {path: 'tribe', component: TribeComponent},
  {path: 'atlas', component: AtlassianComponent},
  {path: 'impact', component: MeasuringimpactComponent},
  {path: 'kotter', component: KotterComponent},
  {path: 'servicenow', component: ServicenowComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [ServicenowComponent, KotterComponent, MeasuringimpactComponent, TribeComponent, AtlassianComponent, HomeComponent, EngineeringComponent, ResumeComponent, WorkshopsComponent, SocialactivismComponent]
