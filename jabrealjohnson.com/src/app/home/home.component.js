"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
let HomeComponent = class HomeComponent {
    constructor() {
        this.images = [
            {
                imageSrc: 'https://burst.shopifycdn.com/photos/laptop-from-above.jpg',
                imageAlt: 'nature1'
            },
            {
                imageSrc: 'https://media.istockphoto.com/photos/coach-drawing-american-football-game-playbook-picture-id1366672302?b=1&k=20&m=1366672302&s=170667a&w=0&h=icvKGPFCVclcwsj0l3D91o2MStAYTEGRLijEs2JiCwk=',
                imageAlt: 'nature2'
            },
            {
                imageSrc: 'https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg',
                imageAlt: 'nature3'
            },
            {
                imageSrc: 'https://miro.medium.com/max/1400/1*3Fxk3b8h1kvKJFe5gVf98A.png',
                imageAlt: 'nature4'
            },
            {
                imageSrc: 'https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:786fd7a8-9b53-4b73-af03-fb1b76992638/SMT-2480_JiraAlign_Screenshots-01-ProgramManagement.png',
                imageAlt: 'Jira Strategy'
            },
            {
                imageSrc: 'https://www.worldofagile.com/wp-content/uploads/2018/03/DevOpsToolchain.png',
                imageAlt: 'nature5'
            },
        ];
    }
    ngOnInit() {
        console.log("do someting ");
    }
    goToBlogs() {
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx3Q0FBa0Q7QUFVbEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUV4QjtRQU9BLFdBQU0sR0FBRztZQUNQO2dCQUVFLFFBQVEsRUFBRSwyREFBMkQ7Z0JBQ3JFLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLDRMQUE0TDtnQkFDdE0sUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDRSxRQUFRLEVBQUUsZ0ZBQWdGO2dCQUMxRixRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNFLFFBQVEsRUFBRSwrREFBK0Q7Z0JBQ3pFLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLGlLQUFpSztnQkFDM0ssUUFBUSxFQUFFLGVBQWU7YUFDMUI7WUFDRDtnQkFDRSxRQUFRLEVBQUUsNkVBQTZFO2dCQUN2RixRQUFRLEVBQUUsU0FBUzthQUNwQjtTQUNGLENBQUE7SUFqQ2UsQ0FBQztJQUVqQixRQUFRO1FBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBOEJELFNBQVM7SUFFVCxDQUFDO0NBQ0YsQ0FBQTtBQXhDWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7R0FDVyxhQUFhLENBd0N6QjtBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7T3JiaXRDb250cm9sc30gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIGNvbnNvbGUubG9nKFwiZG8gc29tZXRpbmcgXCIpXG4gIH1cblxuICBpbWFnZXMgPSBbXG4gICAge1xuXG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vYnVyc3Quc2hvcGlmeWNkbi5jb20vcGhvdG9zL2xhcHRvcC1mcm9tLWFib3ZlLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTEnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9jb2FjaC1kcmF3aW5nLWFtZXJpY2FuLWZvb3RiYWxsLWdhbWUtcGxheWJvb2stcGljdHVyZS1pZDEzNjY2NzIzMDI/Yj0xJms9MjAmbT0xMzY2NjcyMzAyJnM9MTcwNjY3YSZ3PTAmaD1pY3ZLR1BGQ1ZjbGN3c2owbDNEOTFvMk1TdEFZVEVHUkxpakVzMkppQ3drPScsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTInXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vdHJhdmVsb3JlZ29uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9NdEhvb2RWaWxsYWdlcy0wNy0yMDAwLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xNDAwLzEqM0Z4azNiOGgxa3ZLSkZlNWdWZjk4QS5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICduYXR1cmU0J1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdodHRwczovL3dhYy1jZG4tMi5hdGxhc3NpYW4uY29tL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL2RhbS9qY3I6Nzg2ZmQ3YTgtOWI1My00YjczLWFmMDMtZmIxYjc2OTkyNjM4L1NNVC0yNDgwX0ppcmFBbGlnbl9TY3JlZW5zaG90cy0wMS1Qcm9ncmFtTWFuYWdlbWVudC5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICdKaXJhIFN0cmF0ZWd5J1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdodHRwczovL3d3dy53b3JsZG9mYWdpbGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL0Rldk9wc1Rvb2xjaGFpbi5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICduYXR1cmU1J1xuICAgIH0sXG4gIF1cblxuICBnb1RvQmxvZ3MoKSB7XG5cbiAgfVxufVxuIl19