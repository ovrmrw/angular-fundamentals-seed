import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PassengerDashboardComponent,
    // PassengerCountComponent,
    // PassengerDetailComponent,
  ]
})
export class PassengerDashboardModule { }
