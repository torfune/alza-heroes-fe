import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  deleteHeroStart,
  getHeroDetailStart,
  updateHeroStart,
} from 'src/app/store/heroes/heroes.actions';
import { RootState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { filter, take, first } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  loading$ = this.store.select(state => state.heroes.loading);
  hero$ = this.store.select(state => state.heroes.detail);
  error$ = this.store.select(state => state.heroes.error);
  name = '';

  constructor(private store: Store<RootState>, private route: ActivatedRoute) {}

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.store.dispatch(getHeroDetailStart({ id }));
    this.store
      .select(state => state.heroes.detail)
      .pipe(filter(hero => !!hero))
      .subscribe(hero => {
        this.name = hero.name;
      });
  }

  updateHero() {
    this.hero$.pipe(first()).subscribe(hero => {
      this.store.dispatch(
        updateHeroStart({
          id: hero._id,
          name: this.name,
        })
      );
    });
  }

  deleteHero() {
    this.hero$.pipe(first()).subscribe(hero => {
      this.store.dispatch(
        deleteHeroStart({
          id: hero._id,
        })
      );
    });
  }
}
