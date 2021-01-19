import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  mantenimiento: any = ["https://res.cloudinary.com/nsdata/image/upload/v1611012523/ConstrumotorsSAS/lxphpiwkr9tmlgjxjvxy.jpg","https://res.cloudinary.com/nsdata/image/upload/v1611012699/ConstrumotorsSAS/e2do5dohnwjbjieoindi.jpg"]

  constructor(carouselConfig:NgbCarouselConfig) {
    carouselConfig.interval = 5000;
    carouselConfig.pauseOnHover = false;
    carouselConfig.showNavigationIndicators = false;
  }

  ngOnInit(): void {
  }

}
