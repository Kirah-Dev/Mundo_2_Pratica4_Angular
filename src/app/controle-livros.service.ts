import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'O Senhor dos Anéis',
      resumo: 'Uma aventura épica...',
      autores: ['J. R. R. Tolkien'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Dom Casmurro',
      resumo: 'Romance clássico...',
      autores: ['Machado de Assis'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'A Revolução dos Bichos',
      resumo: 'Fábula política...',
      autores: ['George Orwell'],
    },
  ];

  obterLivros(): Livro[] {
    return this.livros;

  }

  incluir(livro: Livro): void {
    // Encontra o maior código do vetor
    const maiorCodigo = Math.max(...this.livros.map((l) => l.codigo));

    // Atribui o próximo código disponível ao livro
    livro.codigo = maiorCodigo + 1;

    // Adiciona o livro ao vetor
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((l) => l.codigo === codigo);

    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
