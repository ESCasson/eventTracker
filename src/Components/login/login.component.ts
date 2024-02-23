import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/authService/auth.service';
import { CommonModule } from '@angular/common';
import { Login } from '../../interfaces/Login';
import { Store } from '@ngrx/store';
import { LoginActions } from '../../app/state/login.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('email') email: ElementRef;


  isEmailVaild$: Observable<boolean>

  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('')
  })

  ngAfterViewInit() {
     this.isEmailVaild$ = this.setValidator()
  }

  setValidator() {
    return fromEvent(this.email.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(() => {
          const enteredEmail = this.loginForm.controls.email.value
          return this.authService.isEmailStructureCorrect(enteredEmail)
        }),
        tap((result) => {
          console.log('iscorrect', result)
          if(!result) return
          this.store.dispatch(LoginActions.setLogin({
            loginDetails: {
              email: this.loginForm.controls.email.value,
              loginDateTime: new Date().toString()
            }
          }))
          this.router.navigateByUrl('/Home')
        })
      )
  }

}
