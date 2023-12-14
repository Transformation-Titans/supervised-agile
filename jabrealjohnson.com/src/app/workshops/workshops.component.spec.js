"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const workshops_component_1 = require("./workshops.component");
describe('WorkshopsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [workshops_component_1.WorkshopsComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(workshops_component_1.WorkshopsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3Nob3BzLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya3Nob3BzLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBRWxFLCtEQUEyRDtBQUUzRCxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ2xDLElBQUksU0FBNkIsQ0FBQztJQUNsQyxJQUFJLE9BQTZDLENBQUM7SUFFbEQsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0saUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxZQUFZLEVBQUUsQ0FBRSx3Q0FBa0IsQ0FBRTtTQUNyQyxDQUFDO2FBQ0QsaUJBQWlCLEVBQUUsQ0FBQztRQUVyQixPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsd0NBQWtCLENBQUMsQ0FBQztRQUN0RCxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IFdvcmtzaG9wc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3BzLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdXb3Jrc2hvcHNDb21wb25lbnQnLCAoKSA9PiB7XG4gIGxldCBjb21wb25lbnQ6IFdvcmtzaG9wc0NvbXBvbmVudDtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8V29ya3Nob3BzQ29tcG9uZW50PjtcblxuICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbIFdvcmtzaG9wc0NvbXBvbmVudCBdXG4gICAgfSlcbiAgICAuY29tcGlsZUNvbXBvbmVudHMoKTtcblxuICAgIGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChXb3Jrc2hvcHNDb21wb25lbnQpO1xuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgY3JlYXRlJywgKCkgPT4ge1xuICAgIGV4cGVjdChjb21wb25lbnQpLnRvQmVUcnV0aHkoKTtcbiAgfSk7XG59KTtcbiJdfQ==