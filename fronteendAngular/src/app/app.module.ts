import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FilmesIndexComponent } from './components/pages/filmes/filmes-index/filmes-index.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmesCreateComponent } from './components/pages/filmes/filmes-create/filmes-create.component';
import { GenerosCreateComponent } from './components/pages/generos/generos-create/generos-create.component';
import { GenerosIndexComponent } from './components/pages/generos/generos-index/generos-index.component';
import { FilmesViewComponent } from './components/pages/filmes/filmes-view/filmes-view.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    FilmesIndexComponent,
    FilmesCreateComponent,
    GenerosCreateComponent,
    GenerosIndexComponent,
    FilmesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
