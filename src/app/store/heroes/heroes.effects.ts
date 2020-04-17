import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from '../../services/backend.service';

@Injectable()
export class HeroesEffects {
  getList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Heroes] Get List - start'),
      mergeMap(() =>
        this.backendService.getHeroesList().pipe(
          map(heroes => ({
            type: '[Heroes] Get List - success',
            payload: heroes,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}
}
