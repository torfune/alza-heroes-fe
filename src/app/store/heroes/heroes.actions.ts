import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/services/backend.service';

// Get List
export const getHeroesListStart = createAction('[Heroes] Get List - start');
export const getHeroesListSuccess = createAction(
  '[Heroes] Get List - success',
  props<{ payload: Hero[] }>()
);
export const getHeroesListFailure = createAction(
  '[Heroes] Get List - failure',
  props<{ payload: string }>()
);

// Create
export const createHeroStart = createAction(
  '[Heroes] Create - start',
  props<{ payload: string }>()
);
export const createHeroSuccess = createAction('[Heroes] Create - success');
export const createHeroFailure = createAction(
  '[Heroes] Create - failure',
  props<{ payload: string }>()
);
