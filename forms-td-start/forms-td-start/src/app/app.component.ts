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
  }
}
