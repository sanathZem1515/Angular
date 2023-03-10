import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registeredId?:boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  API_KEY = 'AIzaSyBKKq-1WLUldGZsUK_h88GJweFc8m6ft5Y';

  signup(email: string, password: string) {
    const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;

    return this.http
      .post<AuthResponseData>(signUpUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorResponse) => {
          let errorMessage = 'An unknown error occured';

          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          }

          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already';
          }
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string) {
    const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;

    return this.http.post<AuthResponseData>(signInUrl, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
