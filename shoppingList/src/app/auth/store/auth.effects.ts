import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../auth.service';
import * as AuthActions from './auth.actions';

const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;

export class AuthEffects {
  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LogInStart) => {
        return this.http.post<AuthResponseData>(signInUrl, {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true,
        });
      })
    ) .pipe(catchError( error => {
        of()
    }),map( resData => {
        of();
    }));
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
