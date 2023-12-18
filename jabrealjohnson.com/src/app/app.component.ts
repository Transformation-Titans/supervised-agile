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
    if (this.observer) {
      this.observer.disconnect(); // Disconnect previous observer
    }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Visible section:', entry.target.id);
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // Assuming each routed component has a main container with a class 'page-section'
    const sections = document.querySelectorAll('.page-section');
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
