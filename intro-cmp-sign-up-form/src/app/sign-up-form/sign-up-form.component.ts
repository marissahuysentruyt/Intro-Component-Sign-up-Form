import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['../../scss/components/_sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: this.formBuilder.control('',
        Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])
      ),
      lastName: this.formBuilder.control('',
        Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])
      ),
      email: this.formBuilder.control('', 
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ), 
      password: this.formBuilder.control('',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ])
      ),
    })
  }

  onSubmit(signUpForm: any) {
    this.formSubmitted = true;
    console.log('form submitted')
    console.log(this.signUpForm.value)
  }
}
