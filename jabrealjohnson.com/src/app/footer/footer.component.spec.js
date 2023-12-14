"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const footer_component_1 = require("./footer.component");
describe('FooterComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            declarations: [footer_component_1.FooterComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(footer_component_1.FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9vdGVyLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBRWxFLHlEQUFxRDtBQUVyRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLElBQUksU0FBMEIsQ0FBQztJQUMvQixJQUFJLE9BQTBDLENBQUM7SUFFL0MsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0saUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxZQUFZLEVBQUUsQ0FBRSxrQ0FBZSxDQUFFO1NBQ2xDLENBQUM7YUFDRCxpQkFBaUIsRUFBRSxDQUFDO1FBRXJCLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxrQ0FBZSxDQUFDLENBQUM7UUFDbkQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xuXG5kZXNjcmliZSgnRm9vdGVyQ29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBGb290ZXJDb21wb25lbnQ7XG4gIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPEZvb3RlckNvbXBvbmVudD47XG5cbiAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGRlY2xhcmF0aW9uczogWyBGb290ZXJDb21wb25lbnQgXVxuICAgIH0pXG4gICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG5cbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoRm9vdGVyQ29tcG9uZW50KTtcbiAgICBjb21wb25lbnQgPSBmaXh0dXJlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZScsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=