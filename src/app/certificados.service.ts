import { Injectable } from '@angular/core';
import { certificados, ICertificados } from './certificados';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  certificados: ICertificados[] = certificados;


  constructor() { }

  getAll() {
    return this.certificados;
  }
}
