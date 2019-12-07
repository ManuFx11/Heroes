import { Component, OnInit } from '@angular/core';
//Importo el router
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

 //Recibe el parametro y lo mando a search
  public buscarHeroe(search:string){
      this._router.navigate(['/search',search]);
  }

}
