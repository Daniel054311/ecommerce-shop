import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Pages/Components/home/home.component";
import { NavbarComponent } from "./Pages/Shared/Navs/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, NavbarComponent]
})
export class AppComponent {
  title = 'ecommerce-shop';
}
