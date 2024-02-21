import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, distinctUntilChanged, fromEvent, mergeMap, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('email') email: ElementRef;

   constructor(private authService: AuthService) { }

  loginForm = new FormGroup({
    email: new FormControl('')
  })

  ngAfterViewInit() {
    fromEvent(this.email.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(() => {
          const enteredEmail = this.loginForm.controls.email.value
          return this.authService.isEmailStructureCorrect(enteredEmail)
        }),
        tap((result) => {
          console.log('iscorrect', result)
        })
      )
      .subscribe();
  }

}
