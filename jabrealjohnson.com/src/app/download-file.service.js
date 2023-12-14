"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadFileService = void 0;
const core_1 = require("@angular/core");
let DownloadFileService = class DownloadFileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
};
DownloadFileService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], DownloadFileService);
exports.DownloadFileService = DownloadFileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQtZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG93bmxvYWQtZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUEyQztBQU0zQyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUU5QixZQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO0lBQUksQ0FBQztDQUMvQyxDQUFBO0FBSFksbUJBQW1CO0lBSC9CLGlCQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csbUJBQW1CLENBRy9CO0FBSFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRG93bmxvYWRGaWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwQ2xpZW50Okh0dHBDbGllbnQpIHsgfVxufVxuIl19