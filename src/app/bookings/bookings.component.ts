import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { InterfaceBooking } from '../Interfaces/IntBooking';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{
 
constructor(private bkService:BookingService){};

  ngOnInit(): void {
    this.lstBooking=this.bkService.getBookings();
   }

  lstBooking : InterfaceBooking[]=[];

  deleteBooking(booking:InterfaceBooking) : void{
   
this.bkService.deleteBooking(booking);

  }

}
