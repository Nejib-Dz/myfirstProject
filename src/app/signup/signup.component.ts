import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNameValidators } from '../validators/test.validators';
import { EmailValidator } from '../validators/email.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl ('', Validators.required),
    //username: new FormControl ('', [Validators.required, UserNameValidators.connotCantinSpace]),
    email: new FormControl ('', [Validators.required,Validators.email], [EmailValidator.shoulBeUnique]),
    password: new FormControl ('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  get name(){
    return this.form.get('name');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
 

}
