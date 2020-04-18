import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/services/backend.service';

// Get List
export const getHeroesListStart = createAction('[Heroes] Get List - start');
export const getHeroesListSuccess = createAction(
  '[Heroes] Get List - success',
  props<{ heroes: Hero[] }>()
);
export const getHeroesListFailure = createAction(
  '[Heroes] Get List - failure',
  props<{ error: string }>()
);

// Get Detail
export const getHeroDetailStart = createAction(
  '[Heroes] Get Detail - start',
  props<{ id: number }>()
);
export const getHeroDetailSuccess = createAction(
  '[Heroes] Get Detail - success',
  props<{ hero: Hero }>()
);
export const getHeroDetailFailure = createAction(
  '[Heroes] Get Detail - failure',
  props<{ error: string }>()
);

// Create
export const createHeroStart = createAction(
  '[Heroes] Create - start',
  props<{ name: string }>()
);
export const createHeroSuccess = createAction('[Heroes] Create - success');
export const createHeroFailure = createAction(
  '[Heroes] Create - failure',
  props<{ error: string }>()
);

// Update
export const updateHeroStart = createAction(
  '[Heroes] Update - start',
  props<{ id: number; name: string }>()
);
export const updateHeroSuccess = createAction(
  '[Heroes] Update - success',
  props<{ hero: Hero }>()
);
export const updateHeroFailure = createAction(
  '[Heroes] Update - failure',
  props<{ error: string }>()
);

// Delete
export const deleteHeroStart = createAction(
  '[Heroes] Delete - start',
  props<{ id: number }>()
);
export const deleteHeroSuccess = createAction('[Heroes] Delete - success');
export const deleteHeroFailure = createAction(
  '[Heroes] Delete - failure',
  props<{ error: string }>()
);
