import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './certificados/certificados.component';
import { EuComponent } from './eu/eu.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  { path: '', redirectTo: "pagina-inicial", pathMatch: "full"}, // Redirecionando primeiro acesso para pagina inicial 
  {path: 'pagina-inicial', loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then(m => m.PaginaInicialModule)},
  {path: 'eu', loadChildren: () => import('./eu/eu.module').then(m => m.EuModule)},
  {path: 'habilidades', loadChildren: () => import('./habilidades/habilidades.module').then(m => m.HabilidadesModule)},
  {path: 'projetos', loadChildren: () => import('./projetos/projetos.module').then(m => m.ProjetosModule)},
  
  {path: 'certificados', loadChildren: () => import('./certificados/certificados.module').then(m => m.CertificadosModule)}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
