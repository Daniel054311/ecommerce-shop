import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { SignUpNavComponent } from "../Navs/sign-up-nav/sign-up-nav.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [SignUpNavComponent, ReactiveFormsModule,RouterLink],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginComponent implements OnInit{
  signUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.signUpForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]]
  });

  }

  formAction() {
    if (this.signUpForm.valid) {
      // Form is valid, proceed with form submission
      const formData = this.signUpForm.value;
      alert('Form submitted: ' + JSON.stringify(formData)); // Display form data in alert

      // You can perform further actions like sending the form data to a server
    } else {
      // Form is invalid, display error messages or take other actions
      alert('Form is invalid');
    }
  }



  }
