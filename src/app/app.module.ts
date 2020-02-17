import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PeopleComponent } from './components/people/people.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PlanetsComponent } from './components/planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PeopleComponent,
    StarshipsComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
