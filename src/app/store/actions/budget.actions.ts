import { Budget } from './../models/budget.model';
import { Action } from '@ngrx/store';


export enum BudgetActionTypes {
  ISSUE = '[BUDGET] ISSUE',
  RECORD = '[BUDGET] RECORD',
  ISSUE_SUCCESS = '[BUDGET] ISSUE_SUCCESS',
  ISSUE_FAILURE = '[BUDGET] ISSUE_FAILURE',
  RECORD_SUCCESS = '[BUDGET] RECORD_SUCCESS',
  RECORD_FAILURE = '[BUDGET] RECORD_FAILURE',
}

export class IssueBudgetAction implements Action {
  readonly type = BudgetActionTypes.ISSUE;

  constructor(public payload: Budget) {}
}

export class IssueBudgetSuccessAction implements Action {
  readonly type = BudgetActionTypes.ISSUE_SUCCESS;

  constructor(public payload: Budget) {}
}

export class IssueBudgetFailureAction implements Action {
  readonly type = BudgetActionTypes.ISSUE_FAILURE;

  constructor(public payload: string) {}
}

export class BudgetRecordAction implements Action {
  readonly type = BudgetActionTypes.RECORD;

  constructor() {}
}

export class BudgetRecordSuccessAction implements Action {
  readonly type = BudgetActionTypes.RECORD_SUCCESS;

  constructor(public payload: Budget) {}
}

export class BudgetRecordFailureAction implements Action {
  readonly type = BudgetActionTypes.RECORD_FAILURE;

  constructor(public payload: string) {}
}


export type BudgetAction =
  IssueBudgetAction |
  BudgetRecordAction |
  IssueBudgetSuccessAction |
  IssueBudgetFailureAction |
  BudgetRecordSuccessAction |
  BudgetRecordFailureAction;
