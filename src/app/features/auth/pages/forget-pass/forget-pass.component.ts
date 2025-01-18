import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-pass',
  imports: [...SHARED_IMPORTS],
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.scss'
})
export class ForgetPassComponent {
  forgetPassForm: FormGroup;

  constructor(private fb: FormBuilder,private _authService:AuthService, private _router:Router, private toastr: ToastrService){
        this.forgetPassForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
        });
  }

  forgetPass(){
    if(this.forgetPassForm.valid){
      this._authService.sendOtpToEmail({email:this.forgetPassForm.get('email')?.value})
      .subscribe(
        (res)=>{ 
          if(res.code == 200){
            this._router.navigate(['./reset-password'])
            this.toastr.success('Otp has been sent to your email', 'Success');
          }
        }
      )
    }
  }

}
