import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createHeroStart } from 'src/app/store/heroes/heroes.actions';
import { RootState } from 'src/app/store';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
})
export class CreateHeroComponent {
  error$ = this.store.select(state => state.heroes.error);
  name = '';

  constructor(private store: Store<RootState>) {}

  createHero() {
    this.store.dispatch(createHeroStart({ name: this.name }));
  }
}
