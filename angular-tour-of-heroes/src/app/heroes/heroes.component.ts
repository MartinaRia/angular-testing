import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit { //implements OnInit è superfluo, se lo si elimina e si elimina anche constructor e ngOnInit la classe funziona ugualmente

  heroes = Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void { //You may commonly see :void as the return type of functions that do not return a value
    this.selectedHero = hero;
  }

  // CUSTOM CODE FOR OUTPUT TEST ------
  newhero: Hero;
  addItem(newItem: string) {
    for (const hero of this.heroes) {
      var lastHero = hero.id;
    }
    var newHeroId = lastHero + 1;
    this.newhero = { id: newHeroId, name: newItem }
  }
  // /CUSTOM CODE FOR OUTPUT TEST -----_

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getHeroes();
  }
} // /HeroesComponent
