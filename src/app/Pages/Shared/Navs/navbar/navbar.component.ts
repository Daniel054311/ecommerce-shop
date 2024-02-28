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

  }

  getProductCount(): number {
    return this.productService.productCount;
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
