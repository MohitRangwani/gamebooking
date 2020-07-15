
export class Booking{
   gameName : String;
   name : String;
   noOfPlayers : Number;
   timeSlot : String;
   price : Number;
   constructor(gameName: String ,name : String , noOfPlayers : Number , timeSlot : String ,price : Number ){
    this.gameName=gameName;
    this.name=name;
    this.noOfPlayers=noOfPlayers;
    this.timeSlot=timeSlot;
    this.price=price;

   }
}