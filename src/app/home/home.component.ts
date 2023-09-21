import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public nomeTela: string = "";
  public nome: string = "Jackson";

  public sobrenomeTela: string = "";
  public sobrenome: string = "Albuquerque";

  public funcaoTela: string = "";
  public funcao: string = "Desenvolvedor Front-End";


  public ultimaPosicaoDoScroll: number = 0;
  public navbarIsActive: boolean = false;



  ngOnInit(): void {

    const charNome = this.nome.split("");
    const charSobrenome = this.sobrenome.split("");
    const charFuncao = this.funcao.split("");


    setInterval( ()=>{
      if(charNome.length){
        this.nomeTela += charNome.shift();
      } else{
        setInterval( ()=>{
          if(charSobrenome.length){
            this.sobrenomeTela += charSobrenome.shift();
          } else {
            setInterval( ()=>{
              if(charFuncao.length){
                this.funcaoTela += charFuncao.shift();
              } else{
                return
              }

            },800)

          }

        },400)
      }
    },200)



  }

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
