import { Injectable } from '@angular/core';
import { IProjetos, projetos } from './projetos';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  projetos: IProjetos[] = projetos

  constructor() { }

  // Metodos 
  getAll() {
    return this.projetos;
  }

  getOne(projetoId: number) {
    return this.projetos.find(projeto => projeto.id === projetoId)
  }
  
}
