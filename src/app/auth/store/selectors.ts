import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/app-state.interface";
import { AuthStateInterface } from "../types/auth-state.interface";

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
