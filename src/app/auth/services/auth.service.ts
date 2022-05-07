import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + "/api/users";
    return this._http.post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
