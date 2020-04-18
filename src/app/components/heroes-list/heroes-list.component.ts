import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/store';
import { Hero } from 'src/app/services/backend.service';
import { getHeroesListStart } from 'src/app/store/heroes/heroes.actions';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  loading$ = this.store.select(state => state.heroes.loading);
  heroes$ = this.store.select(state => state.heroes.list);
  error$ = this.store.select(state => state.heroes.error);
  activeHero: Hero | null = null;

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store.dispatch(getHeroesListStart());
  }

  selectHero(hero: Hero) {
    this.activeHero = hero;
  }
}
