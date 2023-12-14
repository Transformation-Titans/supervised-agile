import { OnInit } from '@angular/core';
export declare class HomeComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    images: {
        imageSrc: string;
        imageAlt: string;
    }[];
    goToBlogs(): void;
}
