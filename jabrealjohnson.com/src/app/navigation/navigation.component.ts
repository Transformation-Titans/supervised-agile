import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      if (link instanceof HTMLElement) {
        link.addEventListener('mouseenter', () => {
          const randomColor = this.getRandomColor();
          link.style.backgroundColor = randomColor;
          link.style.color = this.isLight(randomColor) ? 'black' : 'white';
        });
      }
    });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  isLight(color: string) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155; // Threshold can be adjusted as needed
  }


}
