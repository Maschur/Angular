import { Component, OnInit } from '@angular/core';
import { InterfaceBooking } from '../Interfaces/IntBooking';
import { Router, ActivatedRoute} from '@angular/router';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private dasRouter: Router, private aktuelleRoute:ActivatedRoute, private bkService:BookingService){}

  ngOnInit(): void {
    if(this.dasRouter.url != '/createBooking') {
    var id = Number(this.aktuelleRoute.snapshot.paramMap.get('id'));


    this.booking = this.bkService.getBookingById(id);
    }
   
  }

  booking:InterfaceBooking={
    id: 1,
    name: "Vor- und Nachname",
    roomNumber: 100,
    startDate: new Date() ,
    endDate: new Date()

  }

  speichern(): void{

    var bookingById = this.bkService.getBookingById(this.booking.id);
if(bookingById == null || bookingById == undefined) {
 this.bkService.addBooking(this.booking);
 
}else{
this.bkService.updateBooking(this.booking);

}
this.dasRouter.navigate(['bookings']);
   
  }

  dateChanged(event:Event,isStart:boolean){
var val = (event.target as HTMLInputElement).value
if (isStart){
  this.booking.startDate = new Date(val);
}else {
  this.booking.endDate = new Date(val);
  };

  }
}
