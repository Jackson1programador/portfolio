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

    // setInterval( ()=>{
    //   if(this.menu){
    //     this.menu = false
    //   } else{
    //     this.menu = true
    //   }
    // },2000);

  }
}
