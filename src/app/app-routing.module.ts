import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ErroComponent } from './erro/erro.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full' },
  {path: "sobre", component: SobreComponent },
  {path: "habilidade", component: HabilidadesComponent },
  {path: "projetos", component: ProjetosComponent },
  {path: "experiencias", component: ExperienciasComponent },
  {path: "resumo", component: ResumoComponent },
  {path: "404", component: ErroComponent },
  {path: "**", redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
