"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const coaching_component_1 = require("./coaching.component");
describe('CoachingComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [coaching_component_1.CoachingComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(coaching_component_1.CoachingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29hY2hpbmcuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2FjaGluZy5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFrRTtBQUVsRSw2REFBeUQ7QUFFekQsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUNqQyxJQUFJLFNBQTRCLENBQUM7SUFDakMsSUFBSSxPQUE0QyxDQUFDO0lBRWpELFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNwQixNQUFNLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsWUFBWSxFQUFFLENBQUUsc0NBQWlCLENBQUU7U0FDcEMsQ0FBQzthQUNELGlCQUFpQixFQUFFLENBQUM7UUFFckIsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLHNDQUFpQixDQUFDLENBQUM7UUFDckQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBDb2FjaGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29hY2hpbmcuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ0NvYWNoaW5nQ29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBDb2FjaGluZ0NvbXBvbmVudDtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8Q29hY2hpbmdDb21wb25lbnQ+O1xuXG4gIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFsgQ29hY2hpbmdDb21wb25lbnQgXVxuICAgIH0pXG4gICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQ29hY2hpbmdDb21wb25lbnQpO1xuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xuICAgIGV4cGVjdChjb21wb25lbnQpLnRvQmVUcnV0aHkoKTtcbiAgfSk7XG59KTtcbiJdfQ==