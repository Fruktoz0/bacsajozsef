import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.scss']
})
export class Nav1Component implements OnInit {


  menuOpen = false;

  ngOnInit() {

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

  }

}
