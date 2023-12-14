"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const socialactivism_component_1 = require("./socialactivism.component");
describe('SocialactivismComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [socialactivism_component_1.SocialactivismComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(socialactivism_component_1.SocialactivismComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsYWN0aXZpc20uY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzb2NpYWxhY3RpdmlzbS5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUVsRSx5RUFBcUU7QUFFckUsUUFBUSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtJQUN2QyxJQUFJLFNBQWtDLENBQUM7SUFDdkMsSUFBSSxPQUFrRCxDQUFDO0lBRXZELFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNwQixNQUFNLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsWUFBWSxFQUFFLENBQUUsa0RBQXVCLENBQUU7U0FDMUMsQ0FBQzthQUNELGlCQUFpQixFQUFFLENBQUM7UUFFckIsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGtEQUF1QixDQUFDLENBQUM7UUFDM0QsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBTb2NpYWxhY3RpdmlzbUNvbXBvbmVudCB9IGZyb20gJy4vc29jaWFsYWN0aXZpc20uY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ1NvY2lhbGFjdGl2aXNtQ29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBTb2NpYWxhY3RpdmlzbUNvbXBvbmVudDtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8U29jaWFsYWN0aXZpc21Db21wb25lbnQ+O1xuXG4gIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFsgU29jaWFsYWN0aXZpc21Db21wb25lbnQgXVxuICAgIH0pXG4gICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoU29jaWFsYWN0aXZpc21Db21wb25lbnQpO1xuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xuICAgIGV4cGVjdChjb21wb25lbnQpLnRvQmVUcnV0aHkoKTtcbiAgfSk7XG59KTtcbiJdfQ==