import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = "";


  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){
    if(this.descricao) {
      this.route.navigate(["projetos"], {queryParams: {tecnologia: this.descricao}});
      return
    }
    this.route.navigate(["projetos"])
  }

}
