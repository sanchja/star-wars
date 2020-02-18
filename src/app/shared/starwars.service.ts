import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPeople } from './IPeople.interface';
import { IStarships } from './IStarships.interface';
import { IPlanets } from './IPlanets.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  peopleApiUrl: string = 'https://swapi.co/api/people/';
  starshipsApiUrl: string = 'https://swapi.co/api/starships/';
  planetsApiUrl: string = 'https://swapi.co/api/planets/';


  constructor(private http: HttpClient) {}

  // return all People 
  getAllPeople(): Observable<IPeople> {
    return this.http.get<IPeople>(this.peopleApiUrl)
      .pipe(
        map(data => {
          return data['results'];
      })
    )  
    
  }
  // return all Star Ships
  getAllStarShips(): Observable<IStarships> {
    return this.http.get<IStarships>(this.starshipsApiUrl)
      .pipe(
        map(data => {
          return data['results'];
      })
    )
  }
  // return all Planets
  getAllPlanets(): Observable<IPlanets> {
    return this.http.get<IPlanets>(this.planetsApiUrl)
      .pipe(
        map(data => {
          return data['results'];
      })
    )
  }
  
}
