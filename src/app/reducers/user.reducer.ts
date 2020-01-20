import { User } from './../models/user.model';
import { createReducer, on } from '@ngrx/store';
import { changeUserToPrincipal, changeUserToAccountant } from '../actions/user.actions';

let oldUser: User;
const rawUser = localStorage.getItem('user');

if (rawUser) {
  oldUser = JSON.parse(rawUser);
} else {
  oldUser = {
    name: 'Accountant',
    role: 'accountant',
    image: 'accountant-avatar.jpeg'
  };
  localStorage.setItem('user', JSON.stringify(oldUser));
}

export const initialState: User = oldUser;

const _userReducer = createReducer(initialState,
  // on(increment, state => state + 1),
  // on(decrement, state => state - 1),
  // on(reset, state => 0),
  on(changeUserToAccountant, state => {
      const user = {
        name: 'Accountant',
        role: 'accountant',
        image: 'accountant-avatar.jpeg'
      };
      localStorage.setItem('user', JSON.stringify(user));
      state = user;
      return state;
    }
  ),
  on(changeUserToPrincipal, state => {
      const user = {
        name: 'Principal',
        role: 'principal',
        image: 'principal-avatar.jpeg'
      };
      localStorage.setItem('user', JSON.stringify(user));
      state = user;
      return state;
    }
  )
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
