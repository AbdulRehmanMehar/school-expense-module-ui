import { BudgetRecordSuccessAction, IssueBudgetSuccessAction, IssueBudgetAction } from './../actions/budget.actions';
import { BudgetActionTypes, BudgetRecordAction } from '../actions/budget.actions';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { Budget } from '../models/budget.model';
import { Observable, of, from } from 'rxjs';

@Injectable()
export class BudgetEffects {

  constructor(private actions$: Actions, private afs$: AngularFirestore) {}

  @Effect()
  load$ = this.actions$.pipe(
    ofType<BudgetRecordAction>(BudgetActionTypes.RECORD),
    switchMap(_ => this.afs$.collection<Budget>('budgets').stateChanges([])),
    mergeMap(actions => actions),
    map(action => new BudgetRecordSuccessAction({ id: action.payload.doc.id, ...action.payload.doc.data() }))
  );

  @Effect()
  save$ = this.actions$.pipe(
    ofType<IssueBudgetAction>(BudgetActionTypes.ISSUE),
    switchMap(action => {

      const ref = this.afs$.collection<Budget>('budgets');
      return from(ref.add(action.payload));
    }),
    map(action => {
      return new BudgetRecordAction();
    })
  );

}
