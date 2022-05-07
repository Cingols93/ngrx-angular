import { BackendErrorInterface } from "src/app/shared/types/backend-errors.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

export interface AuthStateInterface{
    isSubmitting: boolean,
    currentUser: CurrentUserInterface | null,
    isLoggedIn: boolean | null,
    validationErrors: BackendErrorInterface | null
}
