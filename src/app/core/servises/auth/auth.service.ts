import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { BehaviorSubject, from, Observable } from "rxjs";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from '@firebase/auth-types';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn$=new BehaviorSubject<boolean>(!!localStorage.getItem('token'))
dbPath='/users'


constructor(private router:Router , private angularFireAuth: AngularFireAuth , private angularFireDataBase: AngularFireDatabase ) {


 this.authStateSubscribe()
 }
get isLoggedIn():boolean{
  return this.isLoggedIn$.getValue()
}

  login(email:string,password:string):Observable<any>{
    return from(this.angularFireAuth.signInWithEmailAndPassword(email,password).catch((error)=>{
      this.router.navigate(['/auth/login'])
      window.alert(error.massege);

    })
    ) ;
  }




  logout(){
     return this.angularFireAuth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.isLoggedIn$.next(false)
      this.router.navigate(['/auth/login'])


    })
  }


  authStateSubscribe(){
    this.angularFireAuth.authState.subscribe((user)=>{
      if(user){
        if(!this.isLoggedIn){
          this.router.navigate(['/home'])
        }

        localStorage.setItem('token',JSON.stringify(user))
        this.isLoggedIn$.next(true)
      }else{
        localStorage.removeItem('token')
        this.isLoggedIn$.next(false)
        this.router.navigate(['/auth/login'])
      }
    })

  }

  signup(email:string,password:string):Observable<UserCredential> {
    return from(this.angularFireAuth.createUserWithEmailAndPassword(email,password))
  }

  creatUser(uId:string,name:string,email:string,password:string,logo:string):Observable<any>{
 const userObjectFDB= this.angularFireDataBase.object(this.dbPath)
 return from ( userObjectFDB.set({uId:uId,email:email,name:name,password:password,logo:logo}))
}

}
