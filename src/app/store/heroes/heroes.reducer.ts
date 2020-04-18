import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/services/backend.service';
import {
  getHeroesListStart,
  getHeroesListSuccess,
  getHeroesListFailure,
} from './heroes.actions';

export const initialState: {
  loading: boolean;
  error: string | null;
  list: Hero[];
  detail: Hero | null;
} = {
  loading: false,
  error: null,
  list: [],
  detail: null,
};

export type HeroesState = typeof initialState;

export const heroesReducer = createReducer(
  initialState,

  // Get List
  on(
    getHeroesListStart,
    (state): HeroesState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    getHeroesListSuccess,
    (state, action): HeroesState => ({
      ...state,
      loading: false,
      list: action.payload,
    })
  ),
  on(
    getHeroesListFailure,
    (state, action): HeroesState => ({
      ...state,
      loading: false,
      error: action.payload,
    })
  )
);
