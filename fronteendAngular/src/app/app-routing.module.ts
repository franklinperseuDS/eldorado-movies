import { GenerosIndexComponent } from './components/pages/generos/generos-index/generos-index.component';
import { FilmesCreateComponent } from './components/pages/filmes/filmes-create/filmes-create.component';
import { FilmesIndexComponent } from './components/pages/filmes/filmes-index/filmes-index.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesViewComponent } from './components/pages/filmes/filmes-view/filmes-view.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "filmes",
    component: FilmesIndexComponent
  },
  {
    path: "filmes/cadastrar",
    component: FilmesCreateComponent
  }, {
    path: "filmes/visualizar/:id",
    component: FilmesViewComponent
  },{
    path: "generos",
    component: GenerosIndexComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
