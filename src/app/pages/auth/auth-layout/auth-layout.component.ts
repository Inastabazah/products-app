import { Component } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  animations:[
    slideInAnimation
  ]

})
export class AuthLayoutComponent {
  constructor(private router: Router,private contexts: ChildrenOutletContexts) {}


  getRouteAnimationData(outlet:any) {
    return outlet.activatedRouteData['animation'];
  }


  login() {
    this.router.navigate(['/auth/login']);
  }
  register() {
    this.router.navigate(['/auth/signup']);
  }
}
