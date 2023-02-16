import { Component } from '@angular/core';
import { Hotel, Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent {
  hotelName = 'Hotel California';
  numberOfRooms = 100;
  hideRooms = false;

  hotel: Hotel = {
    totalRooms: 100,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: Room[] = [
    {
      roomType: 'Deluxe',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02')
    },
    {
      roomType: 'Super Deluxe',
      amenities: 'TV, AC, Wifi, Fridge',
      price: 2000,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02')
    }]


  onButtonClick() {
    this.numberOfRooms++;
  }

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }

}
