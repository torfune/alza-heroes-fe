import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/services/backend.service';
import {
  createHeroFailure,
  createHeroStart,
  createHeroSuccess,
  deleteHeroFailure,
  deleteHeroStart,
  deleteHeroSuccess,
  getHeroDetailFailure,
  getHeroDetailStart,
  getHeroDetailSuccess,
  getHeroesListFailure,
  getHeroesListStart,
  getHeroesListSuccess,
  updateHeroFailure,
  updateHeroStart,
  updateHeroSuccess,
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
      error: null,
    })
  ),
  on(
    getHeroesListSuccess,
    (state, { heroes }): HeroesState => ({
      ...state,
      loading: false,
      list: heroes,
    })
  ),
  on(
    getHeroesListFailure,
    (state, { error }): HeroesState => ({
      ...state,
      loading: false,
      error,
    })
  ),

  // Get Detail
  on(
    getHeroDetailStart,
    (state): HeroesState => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    getHeroDetailSuccess,
    (state, { hero }): HeroesState => ({
      ...state,
      loading: false,
      detail: hero,
    })
  ),
  on(
    getHeroDetailFailure,
    (state, { error }): HeroesState => ({
      ...state,
      loading: false,
      error,
    })
  ),

  // Create
  on(
    createHeroStart,
    (state): HeroesState => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    createHeroSuccess,
    (state): HeroesState => ({
      ...state,
      loading: false,
    })
  ),
  on(
    createHeroFailure,
    (state, { error }): HeroesState => ({
      ...state,
      loading: false,
      error,
    })
  ),

  // Update
  on(
    updateHeroStart,
    (state): HeroesState => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    updateHeroSuccess,
    (state, { hero }): HeroesState => ({
      ...state,
      loading: false,
      detail: hero,
    })
  ),
  on(
    updateHeroFailure,
    (state, { error }): HeroesState => ({
      ...state,
      loading: false,
      error,
    })
  ),

  // Delete
  on(
    deleteHeroStart,
    (state): HeroesState => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    deleteHeroSuccess,
    (state): HeroesState => ({
      ...state,
      loading: false,
    })
  ),
  on(
    deleteHeroFailure,
    (state, { error }): HeroesState => ({
      ...state,
      loading: false,
      error,
    })
  )
);
