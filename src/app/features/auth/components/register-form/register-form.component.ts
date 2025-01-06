import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SHARED_IMPORTS } from '../../../../shared/shared-imports';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterObj } from '../../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [...SHARED_IMPORTS],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  registerForm: FormGroup;
  roles: string[] = ['Admin', 'Customer', 'Viewer'];
  registerObj: RegisterObj={}

  constructor(private fb: FormBuilder, private _authService:AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      first_name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')],
      ],
      last_name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          
        ],
      ],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      
      this.registerObj.first_name= this.registerForm.get('first_name')?.value;
      this.registerObj.last_name= this.registerForm.get('last_name')?.value;
      this.registerObj.email= this.registerForm.get('email')?.value;
      this.registerObj.password= this.registerForm.get('password')?.value;
      this.registerObj.role= this.registerForm.get('role')?.value;

      this._authService.register(this.registerObj)
      .subscribe((res)=>{
        this.router.navigate(['/login']);
      })
    } else {
      this.registerObj = {}
    }
  }

  get formControls() {
    return this.registerForm.controls;
  }

}
