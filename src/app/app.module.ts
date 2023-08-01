import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErroComponent } from './erro/erro.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { HomeComponent } from './home/home.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ResumoComponent } from './resumo/resumo.component';
import { SobreComponent } from './sobre/sobre.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroComponent,
    CronogramaComponent,
    HomeComponent,
    ProjetosComponent,
    ResumoComponent,
    SobreComponent,
    NavbarComponent,
    HabilidadesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
