import { Component, OnInit } from '@angular/core';

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






}
