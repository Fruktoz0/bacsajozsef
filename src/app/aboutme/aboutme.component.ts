import { Component } from '@angular/core';
import { faAngular, faGithub, faReact, faBootstrap, faNode, faSass, faJs, faCss3  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})

export class AboutmeComponent {
  constructor(){}

  faAngular = faAngular
  faGithub = faGithub
  faReact = faReact
  faBootstrap = faBootstrap
  faNode = faNode
  faSass = faSass
  faJs = faJs
  faCss = faCss3

}
