import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ConfirmOtpObj } from '../../models/register';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';

@Component({
  selector: 'app-reset-pass',
  imports: [...SHARED_IMPORTS],
  templateUrl: './reset-pass.component.html',
  styleUrl: './reset-pass.component.scss'
})
export class ResetPassComponent {
  
    resetPassForm: FormGroup;
    confirmOtpObj:ConfirmOtpObj={};
    otpConfirmed: boolean = false;

    constructor(private fb: FormBuilder,private _authService:AuthService, private _router:Router, private toastr: ToastrService){
      this.resetPassForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        otp: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      });
    }

    resetPass(){
      if(this.resetPassForm.valid){
        this.confirmOtpObj.email = this.resetPassForm?.get('email')?.value
        this.confirmOtpObj.otp = this.resetPassForm?.get('otp')?.value
        this.confirmOtpObj.password = this.resetPassForm?.get('password')?.value
        this._authService.confirmOtp(this.confirmOtpObj)
        .subscribe(
          (res)=>{ 
            if(res.code == 200){
              this.toastr.success('Otp confirmed', 'Success');
              this.otpConfirmed =true
            }
          }, (error)=>{
            
            this.toastr.error('Invalid Otp', 'Error');
          }
        )
      }
    }

    changePassword(){
      // this.otpConfirmed ? this._router.navigate(['./change-password']): null;
      this._router.navigate(['./change-password'])
    }

}
