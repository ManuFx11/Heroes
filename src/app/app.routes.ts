//Importar el Modulo de Rutas de Angular
import { Routes, RouterModule } from '@angular/router';

//Añado Componente que vaya a utilizar
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent} from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'search/:data', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

]

//Exporto la constante de rutas
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);