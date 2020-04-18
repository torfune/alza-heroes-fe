import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/services/backend.service';

export const getHeroesListStart = createAction('[Heroes] Get List - start');
export const getHeroesListSuccess = createAction(
  '[Heroes] Get List - success',
  props<{ payload: Hero[] }>()
);
export const getHeroesListFailure = createAction(
  '[Heroes] Get List - failure',
  props<{ payload: string }>()
);
