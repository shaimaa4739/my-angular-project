import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginObj } from '../../models/register';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router, RouterLink } from '@angular/router';
import { PagelayoutService } from '../../../../core/services/pagelayout.service';
import { Pagelayout } from '../../../../core/enums/pagelayout';

@Component({
  selector: 'app-login-form',
  imports: [...SHARED_IMPORTS, MatCheckboxModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginObj: LoginObj={}

  constructor(private _pagelayoutService: PagelayoutService,private _authService:AuthService, private fb: FormBuilder, private _router:Router){
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

      this._authService.login(this.loginObj).subscribe((res)=>{
        if(res.code == 200){
          localStorage.setItem("loggedIn", true.toString())
          localStorage.setItem("token", res.data.accessToken)
          localStorage.setItem("refershToken", res.data.refreshToken)
          this._pagelayoutService.setLayout(Pagelayout.Authorized)
          this._router.navigate(['./dashboard'])
        } else {
          localStorage.setItem("loggedIn", false.toString())
        }
      })
    } else {
      this.loginObj = {}
    }
  }

}
