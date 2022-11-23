import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EuComponent } from './eu/eu.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    EuComponent,
    HabilidadesComponent,
    ProjetosComponent,
    CertificadosComponent,
    BarraPesquisaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
