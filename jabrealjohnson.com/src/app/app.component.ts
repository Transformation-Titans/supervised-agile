import { Component, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'jabrealjohnson.com';
  lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop){
      // Downscroll code
      this.applyFadeOut();
    } else {
      // Upscroll code
      this.applyFadeIn();
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
  private observer!: IntersectionObserver;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.setUpIntersectionObserver();
    });
  }

  setUpIntersectionObserver() {
    // Assuming each routed component has a main container with a class 'page-section'
    const sections = document.querySelectorAll('.page-section');

    if (this.observer) {
      this.observer.disconnect(); // Disconnect previous observer
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Visible section:', entry.target.id);
          const circles = entry.target.querySelectorAll('.circle');
          circles.forEach(circle => circle.classList.add('in-view'));
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    sections.forEach(section => {
      this.observer.observe(section);
    });
  }
  private applyFadeIn() {
    let elements = document.querySelectorAll('.page-section');
    elements.forEach(element => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }

  private applyFadeOut() {
    let elements = document.querySelectorAll('.page-section');
    elements.forEach(element => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
