import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'jabrealjohnson.com';
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

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
