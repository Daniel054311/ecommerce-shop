import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from "../../Shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { NewArivalComponent } from "../../Shared/new-arival/new-arival.component";
import { MenCategoryComponent } from "../../Shared/men-category/men-category.component";
import { WomenCategoryComponent } from "../../Shared/women-category/women-category.component";
import { LimelightComponent } from "../../Shared/limelight/limelight.component";
import { FeedbackComponent } from "../../Shared/feedback/feedback.component";

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [FooterComponent, CommonModule, RouterLink, NewArivalComponent, MenCategoryComponent, WomenCategoryComponent, LimelightComponent, FeedbackComponent]
})
export class ShopComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // yellowBanner: string = '../../../../assets/images/s1.jpg';
  // voilentBanner: string = '../../../../assets/images/s2.png';

  // images = [
  //   '../../../../assets/images/shop-hero-1-product-slide-1.png',
  //   '../../../../assets/images/s1.jpg',
  //   '../../../../assets/images/s2.png',
  //   // Add more image paths as needed
  // ];
  // currentIndex = 0;



  // prevImage() {
  //   this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  // }

  // nextImage() {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  // }

}
