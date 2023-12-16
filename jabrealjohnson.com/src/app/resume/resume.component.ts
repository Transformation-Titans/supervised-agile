import { Component, OnInit } from '@angular/core';
import {faYoutube, faAws, faAtlassian, faGoogle, faInstagram, faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
