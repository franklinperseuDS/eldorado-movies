

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot , Router } from '@angular/router';


@Component({
  selector: 'app-filmes-view',
  templateUrl: './filmes-view.component.html',
  styleUrls: ['./filmes-view.component.sass']
})
export class FilmesViewComponent implements OnInit {

  // public params
  // public param1
  // public param2
  // public id
  constructor(private router: ActivatedRoute) {}
//     this.params = 

  ngOnInit(): void {
   
    
       
   
  }
//   getGeneros() {
//     return this.generosService.getAll().subscribe(generos => {
//       this.generos = generos;
//       console.log(this.generos)
//     })
//   }
//   getParam() {
//     const id = this.routerParam.snapshot.queryParams['id'];
//   }
//   index() {
//     this.filmesService.getById(2).subscribe(filmes => {
//       this.filmes = filmes.data;
//       console.log(filmes)
    
//     })

 

 
 
//   }

}
