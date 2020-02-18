import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../shared/starwars.service';
import { IPeople } from '../../shared/IPeople.interface';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  results;
  
  constructor(private starwarsService$: StarwarsService) { }
  


  ngOnInit() {
    
      return this.starwarsService$.getAllPeople()
        .subscribe(res => this.results = res);
 
  }

 

  
  // onShowAllPeople() {
  //   return this.starwarsService$.getAllPeople()
  //   .subscribe( (res) => {
  //     this.people = res;
  //   })
  
   


  // onShowThreePeople() {
  //   this.data = this.starwarsService$.getThreePeople();
  // }
  
  // onHideAllPeople() {
  //   this.data = [];
  // }
}
