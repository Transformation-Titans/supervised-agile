"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const download_file_service_1 = require("./download-file.service");
describe('DownloadFileService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(download_file_service_1.DownloadFileService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQtZmlsZS5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb3dubG9hZC1maWxlLnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFnRDtBQUVoRCxtRUFBOEQ7QUFFOUQsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtJQUNuQyxJQUFJLE9BQTRCLENBQUM7SUFFakMsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLGlCQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUFDLDJDQUFtQixDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IERvd25sb2FkRmlsZVNlcnZpY2UgfSBmcm9tICcuL2Rvd25sb2FkLWZpbGUuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdEb3dubG9hZEZpbGVTZXJ2aWNlJywgKCkgPT4ge1xuICBsZXQgc2VydmljZTogRG93bmxvYWRGaWxlU2VydmljZTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe30pO1xuICAgIHNlcnZpY2UgPSBUZXN0QmVkLmluamVjdChEb3dubG9hZEZpbGVTZXJ2aWNlKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBjcmVhdGVkJywgKCkgPT4ge1xuICAgIGV4cGVjdChzZXJ2aWNlKS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=