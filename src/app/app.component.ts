import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { SlideInterface } from 'src/app/core/iterfaces/img-slider.interface';
import { AuthService } from './core/servises/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'capstone-project';

  isloggedIn$!: Observable<boolean>;
  constructor(private _authService:AuthService){

  }



  }
