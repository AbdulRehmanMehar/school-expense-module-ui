import { Module } from './../models/module.model';
import { Action } from '@ngrx/store';


export enum ModuleActionTypes {
  LOAD = '[MODULE] LOAD',
  ADD = '[MODULE] ADD',
  LOAD_SUCCESS = '[MODULE] LOAD_SUCCESS',
  LOAD_FAILURE = '[MODULE] LOAD_FAILURE',
  ADD_SUCCESS = '[MODULE] ADD_SUCCESS',
  ADD_FAILURE = '[MODULE] ADD_FAILURE',
}


export class LoadModuleAction implements Action {
  readonly type = ModuleActionTypes.LOAD;
}

export class LoadModuleSuccessAction implements Action {
  readonly type = ModuleActionTypes.LOAD_SUCCESS;
  constructor(public payload: Module) {}
}

export class LoadModuleFailureAction implements Action {
  readonly type = ModuleActionTypes.LOAD_FAILURE;
  constructor(public payload: string) {}
}

export class AddModuleAction implements Action {
  readonly type = ModuleActionTypes.ADD;
  constructor(public payload: Module) {}
}

export class AddModuleSuccessAction implements Action {
  readonly type = ModuleActionTypes.ADD_SUCCESS;
  constructor(public payload: Module) {}
}

export class AddModuleFailureAction implements Action {
  readonly type = ModuleActionTypes.ADD_FAILURE;
  constructor(public payload: string) {}
}

export type ModuleActions =
  LoadModuleAction |
  LoadModuleSuccessAction |
  LoadModuleFailureAction |
  AddModuleAction |
  AddModuleSuccessAction |
  AddModuleFailureAction;
