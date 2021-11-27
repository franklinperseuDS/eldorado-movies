import { GenerosService } from './../../../../services/generos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos-index',
  templateUrl: './generos-index.component.html',
  styleUrls: ['./generos-index.component.sass']
})
export class GenerosIndexComponent implements OnInit {
  public generos;
  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.generosService.getAll().subscribe(generos => {
      this.generos = generos.data
      console.log(generos)
    
    })
  }
}
