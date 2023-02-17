import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('ContainerComponent ngAfterContentInit called');
    this.employeeComponent.employeeName = "Employee Name Changed";
  }
}
