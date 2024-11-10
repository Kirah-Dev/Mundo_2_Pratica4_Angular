import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

import { AppRoutingModule } from './app-routing.module';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroTesteComponent } from './livro-teste/livro-teste.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LivroListaComponent,
    LivroDadosComponent,
    LivroTesteComponent,
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [],
})
export class AppModule {}
