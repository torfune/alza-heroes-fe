import { heroesReducer, HeroesState } from './heroes/heroes.reducer';

export const rootState = {
  heroes: heroesReducer,
};

export interface RootState {
  heroes: HeroesState;
}
