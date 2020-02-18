import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../shared/starwars.service';
import { IStarships } from '../../shared/IStarships.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  results;
  constructor(private starwarsService$: StarwarsService) { }

  ngOnInit() {
    
    return this.starwarsService$.getAllStarShips()
      .subscribe(res => this.results = res);

  }

}
