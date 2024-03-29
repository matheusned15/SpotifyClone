import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscas-recentes',
  templateUrl: './buscas-recentes.component.html',
  styleUrls: ['./buscas-recentes.component.scss'],
})
export class BuscasRecentesComponent implements OnInit {
  pesquisasRecentes = ['Top Brasil', 'This is BK', 'DJONGA'];

  campoPesquisa = 'Ned';

  ngOnInit(): void {}

  definirPesquisa(pesquisa: string) {
    this.campoPesquisa = pesquisa;
  }

  buscar() {
    console.log('Buscando...', this.campoPesquisa);
  }
}
