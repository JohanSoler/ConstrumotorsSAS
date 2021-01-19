import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images: any = ["https://res.cloudinary.com/nsdata/image/upload/v1611012523/ConstrumotorsSAS/lxphpiwkr9tmlgjxjvxy.jpg","https://res.cloudinary.com/nsdata/image/upload/v1611012699/ConstrumotorsSAS/e2do5dohnwjbjieoindi.jpg"]

  constructor(carouselConfig:NgbCarouselConfig) {
    carouselConfig.interval = 3000;
    carouselConfig.pauseOnHover = false;
    carouselConfig.showNavigationArrows = false;
  }

  ngOnInit(): void {
  }

}
