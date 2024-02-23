import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Login } from '../../interfaces/Login';

export const getLogin = createFeatureSelector<Login>('login');

export const selectBookCollection = createSelector(
  getLogin,
  (login) => {
    console.log('hits')
    return login
  }
)

