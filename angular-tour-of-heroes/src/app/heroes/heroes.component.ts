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

export class HeroesComponent implements OnInit {

  heroes = HEROES;

  ngOnInit() { }
}
