import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Login } from '../../interfaces/Login';

export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    'Set Login': props<{ loginDetails: Login }>(),
    'Reset Login': emptyProps(),
    'Get Login': emptyProps()
  }
})