import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
