import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/store';
import { Hero } from 'src/app/services/backend.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.select(state => state.heroes.list);

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store.dispatch({ type: '[Heroes] Get List - start' });
  }
}
