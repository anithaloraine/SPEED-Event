import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { IndividualBoardComponent } from './individual-board/individual-board.component';
import { GroupBoardComponent } from './group-board/group-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventComponent,
    LeaderboardComponent,
    HomeComponent,
    IndividualBoardComponent,
    GroupBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
