import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from '../booking.model';
import { BookingService } from '../booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-form-bowling',
  templateUrl: './form-bowling.component.html',
  styleUrls: ['./form-bowling.component.css']
})
export class FormBowlingComponent implements OnInit {
myBookingService : BookingService;
gameName: String="";
price : Number =0;
games: Game[]=[];
  constructor(bookingService : BookingService , public route : Router ,
    public actRoute : ActivatedRoute,public gameService : GameService ) { 
    this.myBookingService=bookingService;
    this.gameName=actRoute.snapshot.params.name;
   this.games=gameService.getGames();
      for(let i=0 ; i<this.games.length ; i++){
        if(this.games[i].name==this.gameName){
          this.price=this.games[i].price;
        }
      }
  }

  ngOnInit(): void {
  }
 
  onFormSubmit(bowlingForm : NgForm ){
  let booking = new Booking(this.gameName ,bowlingForm.value.name, bowlingForm.value.noOfPlayers, 
    bowlingForm.value.timeSlot,this.price);
  this.myBookingService.addBooking(booking);
  this.route.navigate(['bookings'])
  }
}
