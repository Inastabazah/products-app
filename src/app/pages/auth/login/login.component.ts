import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servises/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  formGroup!:FormGroup
  constructor(private router: Router , private _authService:AuthService, private formBuilder:FormBuilder){}
  ngOnInit(): void {this.formGroup=this.formBuilder.group({


    email:[null,Validators.required,Validators.email],
    password:[null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{10,}$')]]
  })

  }

  logInClicked(){
    if(this.formGroup.valid){
this.validateFormGroup()

    }else{
    this._authService.login(this.email.value,this.password.value)

  }
}


  onChangeEvent(event: any){
    console.log(event.checked);
}
get email(){
  return this.formGroup.controls['email']as FormControl
}

get password(){
  return this.formGroup.controls['password']as FormControl
}

getEmailErrorMsg(){
  if (this.email.hasError('required')) {
    return 'You must enter an email';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}

getPasswordErrorMsg(){
  if (this.password.hasError('required')) {
    return 'You must enter a password';
  }

  return 'password not valid';
}
validateFormGroup(){
  Object.keys(this.formGroup.controls).forEach((filed) =>{
    const control =this.formGroup.get(filed);
    control?.markAsTouched({onlySelf:true})
  })
}


}
