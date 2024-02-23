import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/Navs/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { NewArivalComponent } from "../../Shared/new-arival/new-arival.component";
import { MenCategoryComponent } from "../../Shared/men-category/men-category.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, RouterLink, NewArivalComponent, MenCategoryComponent]
})
export class HomeComponent {
  yellowBanner: string = '../../../../assets/images/s1.jpg';
  voilentBanner: string = '../../../../assets/images/s2.png';

  images = [
    '../../../../assets/images/shop-hero-1-product-slide-1.png',
    '../../../../assets/images/s1.jpg',
    '../../../../assets/images/s2.png',
    // Add more image paths as needed
  ];
  currentIndex = 0;



  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

}
