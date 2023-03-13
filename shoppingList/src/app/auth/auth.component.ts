import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  isError = null;
  @ViewChild('authForm') authForm: NgForm;

  constructor(private authService: AuthService, private router: Router, private companyFactoryResover:ComponentFactoryResolver) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (responseData) => {
        this.isLoading = false;
        console.log(responseData);
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.showErrorAlert(errorMessage);
        this.isError = errorMessage;
      }
    );

    this.authForm.reset();
  }

  onHandleError() {
    this.isError = null;
  }

  private showErrorAlert(message:string) {
    // const alertCmp = new AlertComponent(); // wont work since js is creating an instance not angular to make angular create we have to use component factory resolver
    const alertCmpFactory = this.companyFactoryResover.resolveComponentFactory(AlertComponent);

    
  }
}
