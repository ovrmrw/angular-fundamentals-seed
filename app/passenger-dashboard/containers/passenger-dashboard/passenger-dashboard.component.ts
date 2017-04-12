import { Component } from '@angular/core'

import { Passenger } from './../../models/passenger.interface'


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let p of passengers; let i = index">
          <span class="status" [ngClass]="{ 'checked-in': p.checkedIn, 'checked-out': !p.checkedIn }"></span>
          {{ i }}: {{ p.fullname }}
          <div class="date">
            Check in date: 
            {{ (p.checkedIn ? (p.checkInDate | date: 'yMMMMd') : 'Not checked in') | uppercase }}
          </div>
          <div class="children">
            Children: {{ p.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class PassengerDashboardComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null,
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }],
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null,
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }],
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null,
  }]
}
