import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';

@Component({
  selector: 'app-change-pass',
  imports: [...SHARED_IMPORTS],
  templateUrl: './change-pass.component.html',
  styleUrl: './change-pass.component.scss'
})
export class ChangePassComponent {
  
    passwordForm: FormGroup;

    constructor(private fb: FormBuilder,private _authService:AuthService, private _router:Router, private toastr: ToastrService){
      this.passwordForm = this.fb.group({
        oldpassword: ['', [Validators.required, Validators.minLength(4)]],
        newpassword: ['', [Validators.required, Validators.minLength(4)]],
      });
    }

    changePassword(){
      let oldPass = this.passwordForm?.get('oldpassword')?.value
      let newPass = this.passwordForm?.get('newpassword')?.value
      if(oldPass!=newPass){
        this._authService.changePassword(
          {password:oldPass, password_new:newPass }
        )
        .subscribe(
          (res)=>{ 
            if(res.code == 200){
              this.toastr.success('Password changed successfully', 'Success');
              this._router.navigate(['./login'])
            }
          }
        )
      } else {
        this.passwordForm.reset()
        this.toastr.error('New password canot be the same old password', 'Error');
      }
    }
}
