import { Component, OnInit } from '@angular/core';
import { RootState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { getHeroesListStart } from 'src/app/store/heroes/heroes.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loading$ = this.store.select(state => state.heroes.loading);
  heroes$ = this.store.select(state => state.heroes.list);

  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store.dispatch(getHeroesListStart());
  }
}
