import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <template ngFor let-p [ngForOf]="passengers" let-i="index">
        <ul>
          <li>
            {{ i }}: {{ p.fullname }}
          </li>
        </ul>
      </template>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let p of passengers; let i = index">
          {{ i }}: {{ p.fullname }}
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  passengers: IPassenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
  }]
}

interface IPassenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
}
