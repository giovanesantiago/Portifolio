import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuComponent } from './eu.component';

const routes: Routes = [
  {path:'', component: EuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EuRoutingModule { }
