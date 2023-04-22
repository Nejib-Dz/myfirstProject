import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  get email(){
   return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
   }
   Login(){
    console.log(this.form.value)
    this.form.setErrors({
      invalidLogin : true
    })
    this.router.navigate(['/'])

   }
}
