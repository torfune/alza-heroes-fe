import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createHeroStart } from 'src/app/store/heroes/heroes.actions';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss'],
})
export class CreateHeroComponent {
  name = '';

  constructor(private store: Store) {}

  createHero() {
    this.store.dispatch(createHeroStart({ name: this.name }));
  }
}
