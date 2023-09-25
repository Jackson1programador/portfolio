import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  public ultimaPosicaoDoScroll: number = 0;
  public navbarIsActive: boolean = true;


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const posicaoAtual: number = window.scrollY;

    if( posicaoAtual < this.ultimaPosicaoDoScroll ){

      if(posicaoAtual > 50) {
        this.navbarIsActive = true
      }

    }else{
      this.navbarIsActive = false

    }
    this.ultimaPosicaoDoScroll = posicaoAtual;
  }
}
