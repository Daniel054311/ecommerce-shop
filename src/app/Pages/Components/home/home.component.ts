import { Component } from '@angular/core';
import { NavbarComponent } from "../../Shared/Navs/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { NewArivalComponent } from "../../Shared/new-arival/new-arival.component";
import { MenCategoryComponent } from "../../Shared/men-category/men-category.component";
import { WomenCategoryComponent } from "../../Shared/women-category/women-category.component";
import { LimelightComponent } from "../../Shared/limelight/limelight.component";
import { FeedbackComponent } from "../../Shared/feedback/feedback.component";
import { FooterComponent } from "../../Shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, RouterLink, NewArivalComponent, MenCategoryComponent, WomenCategoryComponent, LimelightComponent, FeedbackComponent, FooterComponent]
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
