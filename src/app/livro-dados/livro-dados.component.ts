import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
  standalone: true,
  imports: [FormsModule], 
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro(0, '', '', [], 0); // Instância da classe Livro
  autoresForm: string = '';
  editoras: Editora[] = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(
    servEditora: ControleEditoraService,
    servLivros: ControleLivrosService,
    router: Router
  ) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n'); // Preenche o atributo autores
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista'); // Navega para a rota /lista
  };
}
