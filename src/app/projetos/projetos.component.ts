import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {

  public ultimaPosicaoDoScroll: number = 0;
  public navbarIsActive: boolean = false;


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const posicaoAtual: number = window.scrollY;

    if( posicaoAtual < this.ultimaPosicaoDoScroll ){

      if(posicaoAtual > 50) {
        this.navbarIsActive = true
      }else{
        this.navbarIsActive = false
      }

    }else{
      this.navbarIsActive = false
      console.log("desaparecer menu")
    }
    this.ultimaPosicaoDoScroll = posicaoAtual;
  }

}
