import { FilmesService } from './../../../../services/filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes-index',
  templateUrl: './filmes-index.component.html',
  styleUrls: ['./filmes-index.component.sass']
})
export class FilmesIndexComponent implements OnInit {
  public  filmes;
  public per_page = 5;
  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.index();
  }

  index(page?) {
    this.filmesService.getAll(page, this.per_page).subscribe(filmes => {
      this.filmes = filmes.data
      console.log(filmes)
    
    })
  }
  paginate(page) {
    this.index(page);
  }

  setPerPage(per_page) {
    this.per_page = per_page
    this.index();
  }
    
  
}
