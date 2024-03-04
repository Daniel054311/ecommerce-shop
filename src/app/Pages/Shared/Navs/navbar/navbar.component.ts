import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../Service/Product/product.service';
import { FavoriteDropdownComponent } from "../../favorite-dropdown/favorite-dropdown.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
  imports: [RouterModule, CommonModule, NgOptimizedImage, FavoriteDropdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class NavbarComponent implements OnInit {


  logo: string = '../../../../../assets/Logo.png';
  heart: string = '../../../../../assets/icons/heart.png';
  user: string = '../../../../../assets/icons/user.png';
  cart: string = '../../../../../assets/icons/cart.png';

  showNav: boolean = false;
  selectedProductCount: number = 0;
  dropdownVisible: boolean = false;
  isHovered: boolean = false;


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

  showDropdown(): void {
    this.dropdownVisible = true;
  }

  hideDropdown(): void {
    this.dropdownVisible = false;
  }

hovered() {
    this.isHovered = true;
}

notHovered() {
    this.isHovered = false;
  }

}
