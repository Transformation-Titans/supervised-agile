"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const okrs_component_1 = require("./okrs.component");
describe('OkrsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [okrs_component_1.OkrsComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(okrs_component_1.OkrsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2tycy5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9rcnMuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBa0U7QUFFbEUscURBQWlEO0FBRWpELFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO0lBQzdCLElBQUksU0FBd0IsQ0FBQztJQUM3QixJQUFJLE9BQXdDLENBQUM7SUFFN0MsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0saUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxZQUFZLEVBQUUsQ0FBRSw4QkFBYSxDQUFFO1NBQ2hDLENBQUM7YUFDRCxpQkFBaUIsRUFBRSxDQUFDO1FBRXJCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyw4QkFBYSxDQUFDLENBQUM7UUFDakQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBPa3JzQ29tcG9uZW50IH0gZnJvbSAnLi9va3JzLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCdPa3JzQ29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBPa3JzQ29tcG9uZW50O1xuICBsZXQgZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxPa3JzQ29tcG9uZW50PjtcblxuICBiZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgZGVjbGFyYXRpb25zOiBbIE9rcnNDb21wb25lbnQgXVxuICAgIH0pXG4gICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoT2tyc0NvbXBvbmVudCk7XG4gICAgY29tcG9uZW50ID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBmaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBjcmVhdGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGNvbXBvbmVudCkudG9CZVRydXRoeSgpO1xuICB9KTtcbn0pO1xuIl19