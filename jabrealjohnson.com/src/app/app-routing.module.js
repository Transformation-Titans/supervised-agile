"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingComponents = exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const resume_component_1 = require("./resume/resume.component");
const engineering_component_1 = require("./engineering/engineering.component");
const workshops_component_1 = require("./workshops/workshops.component");
const home_component_1 = require("./home/home.component");
const psychologicalsafety_component_1 = require("./psychologicalsafety/psychologicalsafety.component");
const okrs_component_1 = require("./okrs/okrs.component");
const impactstorymapping_component_1 = require("./impactstorymapping/impactstorymapping.component");
const coaching_component_1 = require("./coaching/coaching.component");
const socialactivism_component_1 = require("./socialactivism/socialactivism.component");
const routes = [
    { path: 'resume', component: resume_component_1.ResumeComponent },
    { path: 'engineering', component: engineering_component_1.EngineeringComponent },
    { path: 'workshops', component: workshops_component_1.WorkshopsComponent },
    { path: 'pschsafety', component: psychologicalsafety_component_1.PsychologicalsafetyComponent },
    { path: 'okrs', component: okrs_component_1.OkrsComponent },
    { path: 'impactstory', component: impactstorymapping_component_1.ImpactstorymappingComponent },
    { path: 'coaching', component: coaching_component_1.CoachingComponent },
    { path: 'socialactivism', component: socialactivism_component_1.SocialactivismComponent },
    { path: '', component: home_component_1.HomeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.RoutingComponents = [home_component_1.HomeComponent, engineering_component_1.EngineeringComponent, resume_component_1.ResumeComponent, workshops_component_1.WorkshopsComponent, socialactivism_component_1.SocialactivismComponent];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUF5QztBQUN6Qyw0Q0FBdUQ7QUFDdkQsZ0VBQTBEO0FBQzFELCtFQUF5RTtBQUN6RSx5RUFBbUU7QUFDbkUsMERBQW9EO0FBQ3BELHVHQUFpRztBQUNqRywwREFBb0Q7QUFDcEQsb0dBQThGO0FBQzlGLHNFQUFnRTtBQUNoRSx3RkFBb0Y7QUFHcEYsTUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztJQUNsRCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDREQUE0QixFQUFDO0lBQzdELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUN4QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDBEQUEyQixFQUFDO0lBQzdELEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUM7SUFDaEQsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFDO0lBQzVELEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztDQUVyQyxDQUFDO0FBT0YsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBSSxDQUFBO0FBQXBCLGdCQUFnQjtJQUw1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQ3hCLENBQUM7R0FFVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0I7QUFDaEIsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLDhCQUFhLEVBQUUsNENBQW9CLEVBQUUsa0NBQWUsRUFBRSx3Q0FBa0IsRUFBRSxrREFBdUIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UmVzdW1lQ29tcG9uZW50fSBmcm9tICcuL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50JztcbmltcG9ydCB7RW5naW5lZXJpbmdDb21wb25lbnR9IGZyb20gJy4vZW5naW5lZXJpbmcvZW5naW5lZXJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7V29ya3Nob3BzQ29tcG9uZW50fSBmcm9tICcuL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7UHN5Y2hvbG9naWNhbHNhZmV0eUNvbXBvbmVudH0gZnJvbSBcIi4vcHN5Y2hvbG9naWNhbHNhZmV0eS9wc3ljaG9sb2dpY2Fsc2FmZXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPa3JzQ29tcG9uZW50fSBmcm9tIFwiLi9va3JzL29rcnMuY29tcG9uZW50XCI7XG5pbXBvcnQge0ltcGFjdHN0b3J5bWFwcGluZ0NvbXBvbmVudH0gZnJvbSBcIi4vaW1wYWN0c3RvcnltYXBwaW5nL2ltcGFjdHN0b3J5bWFwcGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29hY2hpbmdDb21wb25lbnR9IGZyb20gXCIuL2NvYWNoaW5nL2NvYWNoaW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU29jaWFsYWN0aXZpc21Db21wb25lbnQgfSBmcm9tICcuL3NvY2lhbGFjdGl2aXNtL3NvY2lhbGFjdGl2aXNtLmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtwYXRoOiAncmVzdW1lJywgY29tcG9uZW50OiBSZXN1bWVDb21wb25lbnR9LFxuICB7cGF0aDogJ2VuZ2luZWVyaW5nJywgY29tcG9uZW50OiBFbmdpbmVlcmluZ0NvbXBvbmVudH0sXG4gIHtwYXRoOiAnd29ya3Nob3BzJywgY29tcG9uZW50OiBXb3Jrc2hvcHNDb21wb25lbnR9LFxuICB7cGF0aDogJ3BzY2hzYWZldHknLCBjb21wb25lbnQ6IFBzeWNob2xvZ2ljYWxzYWZldHlDb21wb25lbnR9LFxuICB7cGF0aDogJ29rcnMnLCBjb21wb25lbnQ6IE9rcnNDb21wb25lbnR9LFxuICB7cGF0aDogJ2ltcGFjdHN0b3J5JywgY29tcG9uZW50OiBJbXBhY3RzdG9yeW1hcHBpbmdDb21wb25lbnR9LFxuICB7cGF0aDogJ2NvYWNoaW5nJywgY29tcG9uZW50OiBDb2FjaGluZ0NvbXBvbmVudH0sXG4gIHtwYXRoOiAnc29jaWFsYWN0aXZpc20nLCBjb21wb25lbnQ6IFNvY2lhbGFjdGl2aXNtQ29tcG9uZW50fSxcbiAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9XG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuZXhwb3J0IGNvbnN0IFJvdXRpbmdDb21wb25lbnRzID0gW0hvbWVDb21wb25lbnQsIEVuZ2luZWVyaW5nQ29tcG9uZW50LCBSZXN1bWVDb21wb25lbnQsIFdvcmtzaG9wc0NvbXBvbmVudCwgU29jaWFsYWN0aXZpc21Db21wb25lbnRdXG4iXX0=