import { BudgetAction, BudgetActionTypes } from './../actions/budget.actions';
import { BudgetState } from './../models/budget.model';


const initialState: BudgetState = {
  budget: [],
  working: false,
  error: undefined
};


export function BudgetReducer(state: BudgetState = initialState, action: BudgetAction) {
  switch (action.type) {
    case BudgetActionTypes.ISSUE:
      state.working = true;
      state.error = undefined;
      return state;

    case BudgetActionTypes.ISSUE_SUCCESS:
      state.working = false;
      state.error = undefined;
      state.budget.push(action.payload);
      return state;

    case BudgetActionTypes.ISSUE_FAILURE:
      state.working = false;
      state.error = action.payload;
      return state;

    case BudgetActionTypes.RECORD:
      state.budget = [];
      state.working = true;
      state.error = undefined;
      return state;

    case BudgetActionTypes.RECORD_SUCCESS:
      state.working = false;
      state.error = undefined;
      state.budget.push(action.payload);
      return state;

    case BudgetActionTypes.RECORD_FAILURE:
      state.working = false;
      state.error = action.payload;
      return state;

    default:
      return state;
  }
}
