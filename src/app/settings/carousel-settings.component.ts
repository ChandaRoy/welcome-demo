import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-settings',
  templateUrl: './carousel-settings.component.html'
})
export class CarouselSettingsComponent implements OnInit {
  images =[
    {path:'../assets/images/image1.jpg',caption:'First Image'},
    {path:'../assets/images/image2.jpg',caption:'Second Image'},
    {path:'../assets/images/image3.jpg',caption:'Third Image'},
    {path:'../assets/images/image4.jpg',caption:'Fourth Image'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
