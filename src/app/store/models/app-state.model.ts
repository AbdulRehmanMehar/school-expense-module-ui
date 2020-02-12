import { Module, ModuleState } from './module.model';
import { User } from './user.model';
import { BudgetState } from './budget.model';
// import { ContactState } from './contact.model';
// import { AuthState } from './auth.model';

// export interface AppState {
//   readonly auth: AuthState;
//   readonly contact: ContactState;
// }


export interface State {
  readonly user: User;
  readonly module: ModuleState;
  readonly budget: BudgetState;
}
