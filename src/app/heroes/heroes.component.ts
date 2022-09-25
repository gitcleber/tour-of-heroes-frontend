import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  selectedHero?: Hero;


  heroes = HEROES;

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
