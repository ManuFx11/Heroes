import { Component, OnInit } from '@angular/core';
//Importo activated Router para recibir el parametro
import { ActivatedRoute } from '@angular/router'; 
//Importo el servicio Heroes
import { HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   private busqueda:string;
   private resultado:Heroe[];

  constructor(private _heroesService:HeroesService, private _activatedRoute:ActivatedRoute){ 
     this._activatedRoute.params.subscribe(params => {
       this.busqueda = params.data;
    });
  }

  ngOnInit() {
    this.resultado = this._heroesService.searchHeroe(this.busqueda);
  }

}
