import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backend-errors.interface';
import { registerAction } from '../../store/actions/register-actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/register-request.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorInterface | null>

  constructor(private readonly _fb: FormBuilder, private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.initForm()
    this.initValues()
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initForm(): void {
    this.userForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.userForm.value
    }
    this.store.dispatch(registerAction({ request }))
  }

}
