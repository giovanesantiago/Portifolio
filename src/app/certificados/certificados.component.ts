import { Component, OnInit } from '@angular/core';
import { ICertificados } from '../certificados';
import { CertificadosService } from '../certificados.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {
  certificados: ICertificados[] | undefined;
  qntsCertificados: number = 0;

  constructor(
    private certificadoService: CertificadosService
  ) { }

  ngOnInit(): void {
    this.certificados = this.certificadoService.getAll();
    this.qntsCertificados = this.certificados.length;
  }

}
