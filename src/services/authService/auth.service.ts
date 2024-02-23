import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of, tap } from 'rxjs';
import { getLogin } from '../../app/state/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store) { }

  isEmailStructureCorrect(email: string | null): Observable<boolean> {
    if (email === null) return of(false)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const correctEmailStucture = emailPattern.test(email); 
	  return of(correctEmailStucture)
  }

  getLogin() {
    return this.store.select(getLogin)
  }

  
}
