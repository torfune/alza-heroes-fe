import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/services/backend.service';

export const getListStart = createAction('[Heroes] Get List - start');
export const getListSuccess = createAction(
  '[Heroes] Get List - success',
  props<{ payload: Hero[] }>()
);
export const getListFailure = createAction(
  '[Heroes] Get List - failure',
  props<{ payload: string }>()
);
