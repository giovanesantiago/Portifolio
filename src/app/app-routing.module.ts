import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './certificados/certificados.component';
import { EuComponent } from './eu/eu.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path: 'pagina-inicial' , component: PaginaInicialComponent},
  { path: "", redirectTo: "pagina-inicial", pathMatch: "full"}, // Redirecionando primeiro acesso para pagina inicial 
  {path: 'eu', component: EuComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'certificados', component: CertificadosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
