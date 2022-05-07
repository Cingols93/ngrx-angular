import { createAction, props } from "@ngrx/store";
import { BackendErrorInterface } from "src/app/shared/types/backend-errors.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { RegisterRequestInterface } from "../../types/register-request.interface";

export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register Success',
  REGISTER_FAILURE = '[Auth] Register Failure'
}

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorInterface }>()
)
