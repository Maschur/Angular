import { Injectable } from '@angular/core';
import { InterfaceBooking } from './Interfaces/IntBooking';
import { Bookings } from './MockData/mock-bookings';



@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBookings(): InterfaceBooking[]{
    return Bookings;
  }

  deleteBooking(booking:InterfaceBooking) : void{
   
    var index = Bookings.indexOf(booking);
    Bookings.splice(index,1);
    
      }
getBookingById(id:number) : InterfaceBooking{
        var bookingById = Bookings.find(x=>x.id ==id)!;
        return bookingById;
}

addBooking(booking:InterfaceBooking):void {
  Bookings.push(booking);
}

updateBooking(booking:InterfaceBooking):void{
  var currentBooking = this.getBookingById(booking.id);
  currentBooking = booking
}

}
