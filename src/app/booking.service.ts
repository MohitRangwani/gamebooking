
import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
@Injectable()
export class BookingService{ 
  bookings=[];

  constructor(){
  }
  getBooking() : Booking[] {
    return this.bookings;
  }
  addBooking ( booking : Booking) {
     this.bookings.push(booking);
  }
  getTotal(): Number{
    let total=0;
    for(let i=0;i<this.bookings.length;i++){
      
         total=total + this.bookings[i].price;
      }
     return total;
     }
     delete(deleteBooking:Booking){
      for(let i=0;i<this.bookings.length;i++){
      if(deleteBooking==this.bookings[i]){
        this.bookings.splice(i , 1);
      }
       
     }
     }
 
  }

