import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[] = [
    { codEditora: 1, nome: 'HarperCollins Brasil' },
    { codEditora: 2, nome: 'Editora Carambaia' },
    { codEditora: 3, nome: 'Editora do Brasil S/A' },
    
  ];

  constructor() {}

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(
      (editor) => editor.codEditora === codEditora
    )[0];
    return editora ? editora.nome : '';
  }
}
