import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface AuthResponseData {
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyBKKq-1WLUldGZsUK_h88GJweFc8m6ft5Y]';

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }
}
