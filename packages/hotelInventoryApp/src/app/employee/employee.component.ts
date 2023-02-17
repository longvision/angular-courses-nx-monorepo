import { Component, Self } from '@angular/core';
import { RoomsService } from '../services/rooms/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
  //this provider array will create a new instance of the service for this component. Not using the singleton instance.
})
export class EmployeeComponent {
  employeeName = "";
  // This @Self decorator will make sure that the service is injected only if it is present in the current component.
  // If it is used on this component, should be used to show that the service is present in the current component as a dependency.
  constructor(@Self() private roomsService: RoomsService) {
  }
}
