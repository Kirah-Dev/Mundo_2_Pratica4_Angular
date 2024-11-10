import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-teste',
  templateUrl: './livro-teste.component.html',
  styleUrls: ['./livro-teste.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LivroTesteComponent implements OnInit {
  livros: Livro[] = [];

  private servLivros: ControleLivrosService;

  constructor(servLivros: ControleLivrosService) {
    this.servLivros = servLivros;
  }

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();
    console.log(this.livros);
  }
}
