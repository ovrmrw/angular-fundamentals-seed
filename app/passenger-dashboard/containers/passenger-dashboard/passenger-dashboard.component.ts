import { Component, OnInit } from '@angular/core'

import { Passenger } from './../../models/passenger.interface'


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers; let i = index"
        [detail]="passenger" [index]="i"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)">
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[]

  constructor() { }

  ngOnInit() {
    this.passengers = [{
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

  handleEdit(event: Passenger) {
    // console.log(event)
    this.passengers = this.passengers.map((passenger) => {
      if (passenger.id === event.id) {
        return Object.assign({}, passenger, event)
      } else {
        return passenger
      }
    })
  }

  handleRemove(event: Passenger) {
    // console.log(event)
    this.passengers = this.passengers.filter((passenger) => {
      return passenger.id !== event.id
    })
  }
}
