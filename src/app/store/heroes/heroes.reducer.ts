import { createReducer, on } from '@ngrx/store';
import { getListStart, getListSuccess, getListFailure } from './heroes.actions';
import { Hero } from 'src/app/services/backend.service';

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
    getListStart,
    (state): HeroesState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    getListSuccess,
    (state, action): HeroesState => ({
      ...state,
      loading: false,
      list: action.payload,
    })
  ),
  on(
    getListFailure,
    (state, action): HeroesState => ({
      ...state,
      loading: false,
      error: action.payload,
    })
  )
);
