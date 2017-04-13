import { Component, OnChanges, SimpleChanges, SimpleChange, EventEmitter, Input, Output } from '@angular/core'

import { Passenger } from './../../models/passenger.interface'


@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [ngClass]="{ 'checked-in': detail.checkedIn, 'checked-out': !detail.checkedIn }"></span>
      <div *ngIf="editing">
        <input 
          type="text" 
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ index }} : {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date: 
        {{ (detail.checkedIn ? (detail.checkInDate | date: 'yMMMMd') : 'Not checked in') | uppercase }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges {
  @Input() detail: Passenger
  @Input() index: number
  @Output() remove = new EventEmitter<Passenger>()
  @Output() edit = new EventEmitter<Passenger>()
  editing = false

  constructor() { }

  ngOnChanges(changes: { detail: SimpleChange }) {
    if (changes.detail) {
      this.detail = changes.detail.currentValue
    }
    console.log(changes)
  }

  onNameChange(value: string) {
    this.detail.fullname = value
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing
  }

  onRemove() {
    this.remove.emit(this.detail)
  }
}
