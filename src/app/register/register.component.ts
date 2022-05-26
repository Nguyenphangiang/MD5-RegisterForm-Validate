import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Countries} from '../countries';
declare var NgForm: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  countries: Countries[] = [
    {id: 1,
     name: 'VIETNAMESE'},
    {id: 2,
    name: 'THAILAND'},
    {id: 3,
    name: 'LAOS'}
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      country: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    });
  }
  get fval() {
    return this.registerForm.controls;
  }
  signup() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');
  }
}
