import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {

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
