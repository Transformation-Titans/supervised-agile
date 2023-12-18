import {AfterViewInit, Component, OnInit} from '@angular/core';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, AfterViewInit {
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
