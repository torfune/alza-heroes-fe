import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BackendService } from '../../services/backend.service';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import {
  createHeroFailure,
  createHeroStart,
  createHeroSuccess,
  getHeroesListFailure,
  getHeroesListStart,
  getHeroesListSuccess,
} from './heroes.actions';

@Injectable()
export class HeroesEffects {
  // Get List
  getHeroesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroesListStart),
      mergeMap(() =>
        this.backendService.getHeroesList().pipe(
          map(heroes => getHeroesListSuccess({ payload: heroes })),
          catchError(({ error }) =>
            of(getHeroesListFailure({ payload: error.message }))
          )
        )
      )
    )
  );

  // Create
  createHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createHeroStart),
      mergeMap(action =>
        this.backendService.createHero(action.payload).pipe(
          map(() => createHeroSuccess()),
          tap(() => this.router.navigateByUrl('/heroes')),
          catchError(({ error }) =>
            of(createHeroFailure({ payload: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private backendService: BackendService,
    private router: Router
  ) {}
}
