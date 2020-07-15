import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { Booking } from '../booking.model';
import { ProviderService } from '../providers.service';
import { Providers } from '../providers.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
bookings =[];
showBookings: boolean =false;
total:Number=0;
  constructor(public bookingService : BookingService,public router:Router ,public providerService:ProviderService) { 
    this.bookings=bookingService.getBooking();
    if(this.bookings.length!=0){
      this.showBookings=true;
    }
    this.total=bookingService.getTotal();

  }
  selectedProvider: String;
  ngOnInit(): void {
    this.selectedProvider=this.providerService.selectProvider.name;
  }

  changeLocation(){
    this.router.navigate(['location']);
  }
  addBooking(){
    this.router.navigate(['games']);
  }
  changeProvider(){
    this.router.navigate(['providers']);
  }
  onDelete(deleteBooking:Booking){
    this.bookingService.delete(deleteBooking);
    this.total=this.bookingService.getTotal();
    this.bookings=this.bookingService.getBooking();
    if(this.bookings.length!=0){
      this.showBookings=true;
    }
    else{this.showBookings=false}
  }
}
