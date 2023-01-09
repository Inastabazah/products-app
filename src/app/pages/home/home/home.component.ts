import { Component, OnInit } from '@angular/core';
import { service } from 'src/app/core/iterfaces/srervice.iterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  services: service[]=[
    {
      title:'Autocomplete',
      imgUrl:'	https://material.angular.io/assets/screenshots/autocomplete.scene.png',
      description:' Suggests relevant options as the user type',
    },
    {
      title:'Autocomplete',
      imgUrl:'	https://material.angular.io/assets/screenshots/autocomplete.scene.png',
      description:' Suggests relevant options as the user type',
    },
    {
      title:'Autocomplete',
      imgUrl:'	https://material.angular.io/assets/screenshots/autocomplete.scene.png',
      description:' Suggests relevant options as the user type',
    }
  ]
  constructor(){}

  ngOnInit(): void {

  }

}
