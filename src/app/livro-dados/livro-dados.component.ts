import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class LivroDadosComponent implements OnInit {
  editoras: Editora[] = [];
  livro: Livro = new Livro(0, '', '', [], 0);

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService
  ) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    this.servLivros.incluir(this.livro);
    this.livro = new Livro(0, '', '', [], 0);
  }

  obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
