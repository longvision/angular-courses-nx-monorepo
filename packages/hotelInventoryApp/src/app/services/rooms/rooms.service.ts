import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/config/config.interface';
import { APP_SERVICE_CONFIG } from 'src/app/config/config.service';
import { Room } from 'src/app/rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: Room[] = [
    {
      roomType: 'Deluxe',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
      rating: 3.43543
    },
    {
      roomType: 'Super Deluxe',
      amenities: 'TV, AC, Wifi, Fridge',
      price: 2000,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
      rating: 4.2123
    }]

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    // will print the console every time the service instance is called.
    // if there are local instances of this service in any component, it will print the console for each existing instance.
    // if there is not any local instance of this service in any component, it will print the console for the global instance from the singleton here.
    console.log(config.apiEndpoint)

  }



  getRooms() {
    return this.roomList;

  }

}
