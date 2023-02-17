import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// ChangeDetectionStrategy.OnPush is used to avoid unnecessary change detection cycles.
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() roomList: Room[] = [];
  @Input() title!: string;

  @Output() roomSelect = new EventEmitter<Room>();




  constructor() {
    console.log('RoomsComponent constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('RoomsComponent ngOnChanges called');
    console.log(changes);
    if (changes['roomList']) {
      console.log('RoomList changed');
      this.title = ('Total of ' + changes['roomList'].currentValue.length + ' Rooms').toUpperCase();

    }
  }


  selectRoom(room: Room) {
    this.roomSelect.emit(room);
  }
  ngOnDestroy() {
    console.log('RoomsList Component ngOnDestroy called')
  }

}
