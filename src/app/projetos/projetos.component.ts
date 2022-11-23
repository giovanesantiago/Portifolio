import { Component, OnInit } from '@angular/core';
import { IProjetos } from '../projetos';
import { ProjetosService } from '../projetos.service';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos: IProjetos[] = [];

  constructor(
    private projetosService: ProjetosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    const projetos = this.projetosService.getAll();

    // Scripit para pesquisa de projetos e inicialização da pagina projetos
    this.route.queryParamMap.subscribe(params => {
      // pegando o valor da tecnologia da url 
      const tecnologia = params.get("tecnologia")?.toLowerCase();

      // Verificando se tem pesquisa
      if(tecnologia) {
        this.projetos = projetos.filter(projetos => projetos.tecnologia.toLowerCase().includes(tecnologia));
        console.log(this.projetos)
        if(projetos.filter(projetos => projetos.tecnologia.toLowerCase().includes(tecnologia)).length === 0){
          console.log("ok")
          $('main').css("height","100vh")
        }else {
          $('main').css("height","100%")
        }
        return
      }
      // caso não tenha pesquisa
      this.projetos = projetos

    })


  }

  // Efeito de exibir e ocultar imagem 
  exibirIMG(projetoID: number) {
    var botao = $('#botao').html();
            if(botao === "Ocultar Imagem"){
                $('#' + projetoID).hide()
                $('#botao').html("Exibir Imagem")
            }else if (botao === "Exibir Imagem") {
                $('#' + projetoID).show()
                $('#botao').html("Ocultar Imagem")
            }
  }
}
