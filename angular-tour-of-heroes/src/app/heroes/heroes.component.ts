import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
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
  // /CUSTOM CODE FOR OUTPUT TEST -----
}
