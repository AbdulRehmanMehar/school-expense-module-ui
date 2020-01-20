import { User } from './../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { changeUserToPrincipal, changeUserToAccountant } from '../actions/user.actions';



export const initialState: User =   {
  name: 'Accountant',
  role: 'accountant',
  image: 'accountant-avatar.jpeg'
};

const _userReducer = createReducer(initialState,
  // on(increment, state => state + 1),
  // on(decrement, state => state - 1),
  // on(reset, state => 0),
  on(changeUserToAccountant, state =>
    state = {
      name: 'Accountant',
      role: 'accountant',
      image: 'accountant-avatar.jpeg'
    }
  ),
  on(changeUserToPrincipal, state =>
    state = {
      name: 'Principal',
      role: 'principal',
      image: 'principal-avatar.jpeg'
    }
  )
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
