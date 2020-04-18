import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BackendService } from '../../services/backend.service';
import { getHeroesListStart, getHeroesListSuccess } from './heroes.actions';

@Injectable()
export class HeroesEffects {
  getList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroesListStart.type),
      mergeMap(() =>
        this.backendService.getHeroesList().pipe(
          map(heroes => getHeroesListSuccess({ payload: heroes })),
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
