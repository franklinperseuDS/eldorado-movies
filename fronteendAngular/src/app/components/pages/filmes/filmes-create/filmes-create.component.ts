import { Component, OnInit } from '@angular/core';
import Filmes from 'src/app/models/filmes.models';
import { FilmesService } from 'src/app/services/filmes.service';
import { GenerosService } from '../../../../services/generos.service';

@Component({
  selector: 'app-filmes-create',
  templateUrl: './filmes-create.component.html',
  styleUrls: ['./filmes-create.component.sass']
})
export class FilmesCreateComponent implements OnInit {
  public filmes: Filmes = {
    status: "",
    data: {
      name: "",
      sinopse: "",
      poster: "",
      ano_lancamento: "",
      faturamento: "",
      is_actived: false,
      genero: null,
      created_at: null,
      full_path: "string",
      
    }
  };

  public file;
  public generos = {
    data: {
      name: "",
    }
  };
  public hasErrors;
  public errors = []
  public hasSuccess;
  public successMessage;
  constructor(private generosService: GenerosService, private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.getGeneros();
  }

  getGeneros() {
    return this.generosService.getAll().subscribe(generos => {
      this.generos = generos;
      console.log(this.generos)
    })
  }

  addNew() {
    let formData: FormData = new FormData();
    formData.append('name', this.filmes.data.name);
    formData.append('sinopse', this.filmes.data.sinopse);
    formData.append('faturamento', this.filmes.data.faturamento);
    formData.append('ano_lancamento', this.filmes.data.ano_lancamento);
    formData.append('is_actived', '1');
    formData.append('genero[id]', this.filmes.data.genero);

    if(this.file){
      formData.append("poster", this.file, this.file['name']);
    }
    
    this.filmesService.create(formData).subscribe(filmes => {
      this.hasSuccess = true;
      this.successMessage = this.filmes.data.name
      this.filmes = {
        status: "",
        data: {
          name: "",
          sinopse: "",
          poster: "",
          ano_lancamento: "",
          faturamento: "",
          is_actived: false,
          genero: null,
          created_at: null,
          full_path: "string",
        }
      };
    }, error => {
      console.log(error)
      this.hasErrors = true;

      if (error.status === 409) {
        this.errors.push(error.error.data.title)
      }

      for(let err of error.error.message) {
        this.errors.push(err.message);
      }
    })
 
  }

  handleFile(arquivo) {
    this.file = arquivo[0] || null;
  }

  

}
