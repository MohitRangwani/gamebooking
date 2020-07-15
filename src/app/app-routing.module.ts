import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FormBowlingComponent } from './form-bowling/form-bowling.component';
import { LocationComponent } from './location/location.component';
import { ProvidersComponent } from './providers/providers.component';


const routes: Routes = [

{path :'games' , component : GamesComponent},
{path :'' , component : LocationComponent},
{path :'location' , component : LocationComponent},
{path :'providers' , component : ProvidersComponent},
{path : 'bookings' , component : BookingsComponent },
{path : 'add-booking/:name' , component : FormBowlingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
