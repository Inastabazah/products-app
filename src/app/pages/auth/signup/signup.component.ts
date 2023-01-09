import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/core/servises/auth/auth.service';
import { UserCredential } from '@firebase/auth-types';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
formGroup!:FormGroup
  constructor(private router: Router ,private _authService:AuthService, private formBuilder:FormBuilder, private af:AngularFireStorage){}
  ngOnInit(): void {
this.formGroup=this.formBuilder.group({

  name: ['', [Validators.required, Validators.minLength(7)]],
  email: ['', [Validators.required, Validators.minLength(7)]],
  password:[null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{10,}$')]],
  logo:[null,Validators.required],
  i_agree:[null,Validators.required],
})
  }
  signUpClicked(){
    if(this.formGroup.valid){
this.validateFormGroup()
    }else{
         this._authService.signup(this.email.value,this.password.value).pipe(
         switchMap((user:any)=>{
          console.log(user)
          return this._authService.creatUser(user.user.uid,this.email.value,this.name.value,this.password.value,this.logo.value)
         })
         ).subscribe(result=>{
          this.router.navigate(['/home'])
         })
    }
    }



validateFormGroup(){
  Object.keys(this.formGroup.controls).forEach((filed) =>{
    const control =this.formGroup.get(filed);
    control?.markAsTouched({onlySelf:true})
  })
}
  onChangeEvent(event: any){
    console.log(event.checked);
}



get name(){
  return this.formGroup.controls['name'] as FormControl
}

get email(){
  return this.formGroup.controls['email']as FormControl
}

get password(){
  return this.formGroup.controls['password']as FormControl
}

get logo(){
  return this.formGroup.controls['logo']as FormControl
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


path?:''
upload($event: any) {
this.path=$event.target.files[0];
this.af.upload('/files' + Math.random() + this.path,this.path)
}


//uploadimage(){
 // console.log(this.path)
  //this.af.upload('/files' + Math.random() + this.path,this.path)
}
//}

