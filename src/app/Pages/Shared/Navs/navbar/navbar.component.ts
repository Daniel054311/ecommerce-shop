import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../Service/Product/product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule,NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',


})
export class NavbarComponent implements OnInit {


  logo: string = '../../../../../assets/Logo.png';
  heart: string = '../../../../../assets/icons/heart.png';
  user: string = '../../../../../assets/icons/user.png';
  cart: string = '../../../../../assets/icons/cart.png';

  showNav: boolean = false;
  selectedProductCount: number = 0;


  constructor(private router:Router,private productService: ProductService){}

  ngOnInit(): void {

    this.getProductCount();

    this.getFavoriteCount();

  }

  routeToCart() {
    this.selectedProductCount = this.productService.productCount;
    if (this.selectedProductCount >=1) {
      this.router.navigate(["/cart"])
    } else {
      null
    }

  }

  getProductCount(): number {
    return this.productService.productCount;
  }

  getFavoriteCount() {
    return this.productService.countFavorite;
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }
  routeToHome() {
    this.router.navigate([""]);
  }

  hidNav() {
    this.showNav = false;
  }

}
