import { Module } from './../models/module.model';
import { LoadModuleAction, ModuleActionTypes, LoadModuleSuccessAction, AddModuleAction } from './../actions/module.actions';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';

@Injectable()
export class ModuleEffects {

  constructor(private actions$: Actions, private afs$: AngularFirestore) {}

  @Effect()
  load$ = this.actions$.pipe(
    ofType<LoadModuleAction>(ModuleActionTypes.LOAD),
    switchMap(_ => this.afs$.collection<Module>('modules').stateChanges([])),
    mergeMap(actions => actions),
    map(action => new LoadModuleSuccessAction({ id: action.payload.doc.id, ...action.payload.doc.data() }))
  );

  @Effect()
  save$ = this.actions$.pipe(
    ofType<AddModuleAction>(ModuleActionTypes.ADD),
    switchMap(action => {

      const ref = this.afs$.collection<Module>( 'modules' );
      return from(ref.add(action.payload));
    }),
    map(action => {
      return new LoadModuleAction();
    })
  );

}
