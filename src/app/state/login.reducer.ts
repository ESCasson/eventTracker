import { createReducer, on } from '@ngrx/store';

import {Login} from '../../interfaces/Login'
import { LoginActions } from './login.actions';






export const initialState: Login = { email: null, loginDateTime: null };

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.setLogin, (_state, { loginDetails })=> {
   return loginDetails
  }),
  on(LoginActions.resetLogin, (_state, { })=> {
   return initialState
  })
)

