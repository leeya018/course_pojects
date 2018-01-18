import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('heroes are fetched')
    return of(HEROES);
  }
  getHero(id:number): Observable<Hero>{
    this.messageService.add(`hero number ${id}`)
    return of(HEROES.find((hero) => id===hero.id ))
  }

  }
