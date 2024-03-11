import { Component } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from '../../Service/Product/product-data';
import { EMPTY, catchError, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../Shared/footer/footer.component";
import { LimelightComponent } from "../../Shared/limelight/limelight.component";
import { NavbarComponent } from "../../Shared/Navs/navbar/navbar.component";

@Component({
    selector: 'app-combos',
    standalone: true,
    templateUrl: './combos.component.html',
    styleUrl: './combos.component.css',
    imports: [CommonModule, FooterComponent, LimelightComponent, NavbarComponent]
})
export class CombosComponent {
  products: Product[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getLimelight()
    }

  getLimelight(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        catchError(() => EMPTY),
        // finalize(() => this.loading = false)
      )
      .subscribe(products => {
        this.products = products.filter(product => product.title.toLowerCase().includes("sneaker"));
        this.loading = false;
        // console.log(products)
      });
  }

  getFavourite(product: Product): void {
    // Toggle the liked property of the product
    product.liked = !product.liked;
  }
  trackFavourite(index: number, product: any): number {
    return product.id;
  }

}
