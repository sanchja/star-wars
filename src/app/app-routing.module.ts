import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from '../app/components/people/people.component';
import { StarshipsComponent } from '../app/components/starships/starships.component';
import { PlanetsComponent } from '../app/components/planets/planets.component';


const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'planets', component: PlanetsComponent },
  // { path: '**', redirectTo: '/people', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
