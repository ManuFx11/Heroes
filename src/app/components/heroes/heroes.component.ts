import { Component, OnInit } from '@angular/core';
//Importo el Servicio Heroes y la interfaz Heroe
import { HeroesService, Heroe} from '../../services/heroes.service';
//Importo el Router de Angular
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes:Heroe[];
  
  constructor(private _heroesService: HeroesService, private _router:Router) {
    //Silence is gold
   }

  //Nada mas empezar
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  //Se encarga de recibir el id y mandarlo a su pagina heroe/:id
  public verHeroe(id:number){
    this._router.navigate(['/heroe',id]);

  }

}
