import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
//Importo el Activated Route que nos permitira obtener la información de las rutas
import { ActivatedRoute } from '@angular/router';
//Importo el Servicio Heroes
import { HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {

    private id:number;
    private heroe:Heroe;

  constructor(private _activatedRoute:ActivatedRoute, private _heroeService:HeroesService) { 
    this._activatedRoute.params.subscribe(params=>{
        //Params nos da un objeto con los parametros
        this.id = params.id;
    });

  }

  ngOnInit() {
   this.heroe = this._heroeService.getHeroe(this.id);
   console.log(this.heroe);
  }

}
