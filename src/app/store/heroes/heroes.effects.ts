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
  getHeroDetailFailure,
  getHeroDetailStart,
  getHeroDetailSuccess,
  updateHeroStart,
  updateHeroSuccess,
  updateHeroFailure,
  deleteHeroStart,
  deleteHeroSuccess,
  deleteHeroFailure,
} from './heroes.actions';

@Injectable()
export class HeroesEffects {
  // Get List
  getHeroesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroesListStart),
      mergeMap(() =>
        this.backendService.getHeroesList().pipe(
          map(heroes => getHeroesListSuccess({ heroes })),
          catchError(({ error }) =>
            of(getHeroesListFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Get Detail
  getHeroDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroDetailStart),
      mergeMap(({ id }) =>
        this.backendService.getHeroDetail(id).pipe(
          map(hero => getHeroDetailSuccess({ hero })),
          catchError(({ error }) =>
            of(getHeroDetailFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Create
  createHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createHeroStart),
      mergeMap(({ name }) =>
        this.backendService.createHero(name).pipe(
          map(() => createHeroSuccess()),
          tap(() => this.router.navigateByUrl('/heroes')),
          catchError(({ error }) =>
            of(createHeroFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Update
  updateHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateHeroStart),
      mergeMap(({ id, name }) =>
        this.backendService.updateHero(id, name).pipe(
          map(hero => updateHeroSuccess({ hero })),
          catchError(({ error }) =>
            of(updateHeroFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Delete
  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteHeroStart),
      mergeMap(({ id }) =>
        this.backendService.deleteHero(id).pipe(
          map(() => deleteHeroSuccess()),
          tap(() => this.router.navigateByUrl('/heroes')),
          catchError(({ error }) =>
            of(deleteHeroFailure({ error: error.message }))
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
