import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultValue = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }

  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:this.defaultValue,
    //   questionAnswer:this.answer,
    //   gender:'Male'
    // })
    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })

  }

  onSubmit() {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
