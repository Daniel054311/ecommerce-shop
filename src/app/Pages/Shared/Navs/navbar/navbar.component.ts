import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule,NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',


})
export class NavbarComponent {
  logo: string = '../../../../../assets/Logo.png';
  heart: string = '../../../../../assets/icons/heart.png';
  user: string = '../../../../../assets/icons/user.png';
  cart: string = '../../../../../assets/icons/cart.png';

  showNav: boolean = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }

}
