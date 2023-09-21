import { Component, } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent {

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
