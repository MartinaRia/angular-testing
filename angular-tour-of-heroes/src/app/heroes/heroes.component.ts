import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; // sostituisce temporaneamente un database

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

// first implementation
// export class HeroesComponent implements OnInit {
//
//   hero: Hero = {
//     id: 1,
//     name: 'Windstorm'
//   }
//
//   constructor() { }
//
//   ngOnInit() { }
//
// }

export class HeroesComponent implements OnInit { //implements OnInit è superfluo, se lo si elimina e si elimina anche constructor e ngOnInit la classe funziona ugualmente

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }
  ngOnInit() { }

  onSelect(hero: Hero): void { //You may commonly see :void as the return type of functions that do not return a value
    this.selectedHero = hero;
  }
}
