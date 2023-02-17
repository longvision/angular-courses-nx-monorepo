import { Component, Inject, OnInit, Optional } from '@angular/core';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';



@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',   // we can use an html file or inline html elements.
  template: `
  <h1>Hello world from Inline template</h1>
    <h5> Testing </h5>
    <app-container>

      <app-employee/>
      <h1>Testing</h1>
      <h2>Testing</h2>
      <app-rooms/>

    </app-container>


    <div [ngSwitch]="role">
      <div *ngSwitchCase="'admin'">Admin View</div>
      <div *ngSwitchCase="'user'">User View</div>
      <div *ngSwitchDefault>Guest View</div>
    </div>
     `,
  styleUrls: ['./app.component.scss'] // we can use an scss file or inline css elements as well.
  // styles: [`h1 {
  //   color: red;
  // }`]
})
export class AppComponent implements OnInit {
  title = 'hotelInventoryApp';
  role = "user"

  constructor(@Optional() private logService: LoggerService, @Inject(LocalStorageToken) private localStorage: Storage) {
    this.logService?.log('AppComponent constructor called');
    this.localStorage.setItem('test', 'test value')
  }

  ngOnInit() {
    this.logService?.log('AppComponent ngOnInit called');
    this.logService?.log('local storage: ' + this.localStorage.getItem('test'));
  }
}
