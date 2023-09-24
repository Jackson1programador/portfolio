import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu: boolean = true
  constructor() {}

  public menuOnOff() {
    this.menu = !this.menu;
  }

  ngOnInit(): void {



  }
}
