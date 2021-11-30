import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/services/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes-delete',
  templateUrl: './filmes-delete.component.html',
  styleUrls: ['./filmes-delete.component.sass']
})
export class FilmesDeleteComponent implements OnInit {
  public mensagem
  constructor(public filmesService: FilmesService,public router: ActivatedRoute) { }
  
  ngOnInit(): void {
   const id = this.router.snapshot.params.id;
   this.filmesService.deleteById(id).subscribe( mensagem => {
    this.mensagem = mensagem 
  });
   console.log(id)
  }

}
