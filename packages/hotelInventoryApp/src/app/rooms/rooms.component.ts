import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms/rooms.service';
import { Hotel, Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  // inject services here
  constructor(@SkipSelf() private roomsService: RoomsService) {
    console.log('RoomsComponent constructor called');
  }

  hotel: Hotel = {
    totalRooms: 100,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: Room[] = [];
  selectedRoom!: Room
  title = 'Rooms List';
  hotelName = 'Hotel California';
  numberOfRooms = 100;
  hideRooms = false;

  // static property is by default false. So there is no way to get any issue in the parent component's lifecycle hook.
  // static: true to access the child component in the parent component's lifecycle hook.
  // static: false should be used when the child component has any task that can delay, like an http call. This way we will not get it on the ngOnInit parent lifecycle hook.
  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;


  ngAfterViewInit(): void {
    console.log('RoomsComponent ngAfterViewInit called');
    console.log(this.headerComponent);
    console.log(this.headerChildrenComponent.last.title = "Last Title");
    console.log(this.headerChildrenComponent.forEach(item => item.title = "Last Title Children"));
  }


  // very rare to be used.
  ngAfterViewChecked(): void {
    console.log('RoomsComponent ngAfterViewChecked called');

  }

  // similar to useEffect or componentDidMount in react.
  ngOnInit(): void {

    this.roomList = this.roomsService.getRooms();
    // this.localStorage

  }

  // Use cases of DoCheck:

  // 1. To check if a property has changed inside the application and take some action.
  // 2. Very rare to be used.
  // 3. Gets a corner case where ngOnChanges does not get called.

  ngDoCheck(): void {
    console.log('RoomsComponent ngDoCheck called');
  }


  onButtonClick() {
    this.numberOfRooms++;
  }

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
    this.title = this.hideRooms ? 'Voila!' : "Rooms List";
  }

  selectRoom(room: Room) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: Room = {
      roomType: 'Deluxe',
      amenities: 'TV, AC, Wifi',
      price: 1000,
      photos: 'https://picsum.photos/200/300',
      checkinTime: new Date('2020-01-01'),
      checkoutTime: new Date('2020-01-02'),
      rating: 3.43543
    }
    this.roomList = [...this.roomList, room];
  }



}
