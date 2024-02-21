import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isEmailStructureCorrect(email: string | null): Observable<boolean> {
    if (email === null) return of(false)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const correctEmailStucture = emailPattern.test(email); 
	  return of(correctEmailStucture)
  }
}
