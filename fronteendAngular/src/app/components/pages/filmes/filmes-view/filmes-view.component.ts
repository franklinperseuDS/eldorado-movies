

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/services/filmes.service';


@Component({
  selector: 'app-filmes-view',
  templateUrl: './filmes-view.component.html',
  styleUrls: ['./filmes-view.component.sass']
})
export class FilmesViewComponent implements OnInit {
  public filmes;
  
  constructor(private router: ActivatedRoute, private filmesService:FilmesService) {}


  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    this.filmes = this.filmesService.getById(id).subscribe( filme => {
      this.filmes = filme 
    });
    
  }

}
