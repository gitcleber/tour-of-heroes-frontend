import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';
import { MessageService } from '../messages/message.service';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id= ${hero.id}`);
  }

  getHeroes(): void {
    //ex1
    this.heroService.getHeroes().subscribe(
      (heroes) => this.heroes = heroes);

    //ex2
    // this.heroService.getHeroes().subscribe({
    //   next(x) {
    //     console.log('got value ' + JSON.stringify(x));
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });

    //ex3
    // this.heroService.getHeroes().subscribe(
    //   (value) => console.log('got value ' + JSON.stringify(value)),
    //   (err) => console.error('something wrong occurred: ' + err),
    //   () => console.log('done')
    // );

    // exe4
    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 5000);
    // });
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });
    // console.log('just after subscribe');
  }


}
