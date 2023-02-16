import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',   // we can use an html file or inline html elements.
  template: `
  <h1>Hello world from Inline template</h1>
    <h5> Testing </h5>
    <app-rooms/>
     `,
  styleUrls: ['./app.component.scss'] // we can use an scss file or inline css elements as well.
  // styles: [`h1 {
  //   color: red;
  // }`]
})
export class AppComponent {
  title = 'hotelInventoryApp';
}
