import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../shared/starwars.service';
import { IPlanets } from '../../shared/IPlanets.interface';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  results;

  constructor(private starwarsService$: StarwarsService) { }

  ngOnInit() {
    
    return this.starwarsService$.getAllPlanets()
      .subscribe(res => this.results = res);

  }


}
