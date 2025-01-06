import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginObj } from '../../models/register';

@Component({
  selector: 'app-login-form',
  imports: [...SHARED_IMPORTS],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginObj: LoginObj={}

  constructor(private _authService:AuthService, private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      this.loginObj.email= this.loginForm.get('email')?.value;
      this.loginObj.password= this.loginForm.get('password')?.value;

      this._authService.login(this.loginObj).subscribe((res)=>{})
    } else {
      this.loginObj = {}
    }
  }

}
