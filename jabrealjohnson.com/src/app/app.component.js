"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'jabrealjohnson.com';
        this.faYoutube = free_brands_svg_icons_1.faYoutube;
        this.faAws = free_brands_svg_icons_1.faAws;
        this.faAtlassian = free_brands_svg_icons_1.faAtlassian;
        this.faGoogle = free_brands_svg_icons_1.faGoogle;
        this.faInstagram = free_brands_svg_icons_1.faInstagram;
        this.faLinkedin = free_brands_svg_icons_1.faLinkedin;
        this.faTwitter = free_brands_svg_icons_1.faTwitter;
        this.faGithub = free_brands_svg_icons_1.faGithub;
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
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0NBQTBDO0FBQzFDLDhFQUF5STtBQVF6SSxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQXpCO1FBQ0UsVUFBSyxHQUFHLG9CQUFvQixDQUFDO1FBRTdCLGNBQVMsR0FBRyxpQ0FBUyxDQUFDO1FBQ3RCLFVBQUssR0FBRyw2QkFBSyxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxtQ0FBVyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxnQ0FBUSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsbUNBQVcsQ0FBQztRQUMxQixlQUFVLEdBQUcsa0NBQVUsQ0FBQztRQUN4QixjQUFTLEdBQUcsaUNBQVMsQ0FBQztRQUN0QixhQUFRLEdBQUcsZ0NBQVEsQ0FBQztRQUVwQixXQUFNLEdBQUc7WUFDUDtnQkFFRSxRQUFRLEVBQUUsMkRBQTJEO2dCQUNyRSxRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNFLFFBQVEsRUFBRSw0TEFBNEw7Z0JBQ3RNLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLGdGQUFnRjtnQkFDMUYsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDRSxRQUFRLEVBQUUsK0RBQStEO2dCQUN6RSxRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNFLFFBQVEsRUFBRSxpS0FBaUs7Z0JBQzNLLFFBQVEsRUFBRSxlQUFlO2FBQzFCO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLDZFQUE2RTtnQkFDdkYsUUFBUSxFQUFFLFNBQVM7YUFDcEI7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUFBLENBQUE7QUF2Q1ksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNuQyxDQUFDO0dBQ1csWUFBWSxDQXVDeEI7QUF2Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7ZmFZb3V0dWJlLCBmYUF3cywgZmFBdGxhc3NpYW4sIGZhR29vZ2xlLCBmYUluc3RhZ3JhbSwgZmFMaW5rZWRpbiwgZmFUd2l0dGVyLCBmYUdpdGh1Yn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdqYWJyZWFsam9obnNvbi5jb20nO1xuXG4gIGZhWW91dHViZSA9IGZhWW91dHViZTtcbiAgZmFBd3MgPSBmYUF3cztcbiAgZmFBdGxhc3NpYW4gPSBmYUF0bGFzc2lhbjtcbiAgZmFHb29nbGUgPSBmYUdvb2dsZTtcbiAgZmFJbnN0YWdyYW0gPSBmYUluc3RhZ3JhbTtcbiAgZmFMaW5rZWRpbiA9IGZhTGlua2VkaW47XG4gIGZhVHdpdHRlciA9IGZhVHdpdHRlcjtcbiAgZmFHaXRodWIgPSBmYUdpdGh1YjtcblxuICBpbWFnZXMgPSBbXG4gICAge1xuXG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vYnVyc3Quc2hvcGlmeWNkbi5jb20vcGhvdG9zL2xhcHRvcC1mcm9tLWFib3ZlLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTEnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9jb2FjaC1kcmF3aW5nLWFtZXJpY2FuLWZvb3RiYWxsLWdhbWUtcGxheWJvb2stcGljdHVyZS1pZDEzNjY2NzIzMDI/Yj0xJms9MjAmbT0xMzY2NjcyMzAyJnM9MTcwNjY3YSZ3PTAmaD1pY3ZLR1BGQ1ZjbGN3c2owbDNEOTFvMk1TdEFZVEVHUkxpakVzMkppQ3drPScsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTInXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vdHJhdmVsb3JlZ29uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9NdEhvb2RWaWxsYWdlcy0wNy0yMDAwLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xNDAwLzEqM0Z4azNiOGgxa3ZLSkZlNWdWZjk4QS5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICduYXR1cmU0J1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdodHRwczovL3dhYy1jZG4tMi5hdGxhc3NpYW4uY29tL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL2RhbS9qY3I6Nzg2ZmQ3YTgtOWI1My00YjczLWFmMDMtZmIxYjc2OTkyNjM4L1NNVC0yNDgwX0ppcmFBbGlnbl9TY3JlZW5zaG90cy0wMS1Qcm9ncmFtTWFuYWdlbWVudC5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICdKaXJhIFN0cmF0ZWd5J1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdodHRwczovL3d3dy53b3JsZG9mYWdpbGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL0Rldk9wc1Rvb2xjaGFpbi5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICduYXR1cmU1J1xuICAgIH0sXG4gIF1cbn1cbiJdfQ==