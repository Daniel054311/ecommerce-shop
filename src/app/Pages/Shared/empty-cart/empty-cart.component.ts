import { Component } from '@angular/core';
import { NavbarComponent } from "../Navs/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-empty-cart',
    standalone: true,
    templateUrl: './empty-cart.component.html',
    styleUrl: './empty-cart.component.css',
    imports: [NavbarComponent, RouterLink, FooterComponent]
})
export class EmptyCartComponent {

}
