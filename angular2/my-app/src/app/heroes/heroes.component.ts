import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero={
    id:1,
    name:'widstorm'
  }
  heroes:Hero[]=HEROES;

  constructor(private heroService:HeroService) {
  }
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
  ngOnInit() {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => { this.heroes = heroes})
  }

}
