import { Injectable } from '@angular/core';
import { NavItemDto } from '../../dtos/nav-item ';
import { NavMenuDto } from '../../dtos/nav-menue';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  getNavMenue(){
    return new NavMenuDto('navMenu',[
      new NavItemDto('Home','home','/home'),
      new NavItemDto('Dashboard','dashboard','/dashboard'),
      new NavItemDto('Products','category','/products/all-products'),

    ])

  }
}
