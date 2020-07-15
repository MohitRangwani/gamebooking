import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { FormBowlingComponent } from './form-bowling/form-bowling.component';
import { FormsModule } from '@angular/forms'
import { GameService } from './game.service';
import { BookingService } from './booking.service';
import { BookingsComponent } from './bookings/bookings.component';
import { LocationComponent } from './location/location.component';
import { LocationService } from './locaton.service';
import { ProviderService } from './providers.service';
import { ProvidersComponent } from './providers/providers.component';
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    FormBowlingComponent,
    BookingsComponent,
    LocationComponent,
    ProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GameService , BookingService ,LocationService,ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
