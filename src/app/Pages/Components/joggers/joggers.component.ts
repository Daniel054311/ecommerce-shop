import { Component } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from '../../Service/Product/product-data';
import { Router } from '@angular/router';
import { EMPTY, catchError, finalize } from 'rxjs';
import { FooterComponent } from "../../Shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Shared/Navs/navbar/navbar.component";

@Component({
    selector: 'app-joggers',
    standalone: true,
    templateUrl: './joggers.component.html',
    styleUrl: './joggers.component.css',
    imports: [FooterComponent, CommonModule, NavbarComponent]
})
export class JoggersComponent {
  products: Product[] = [];
  loading: boolean = false;

  constructor(private router: Router, private productService: ProductService) { }


  ngOnInit(): void {
    this.getPufferCategory()
    }

  getPufferCategory(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        catchError(() => EMPTY),
        // finalize(() => this.loading = false)
      )
      .subscribe(products => {
        this.products = products.filter(product => product.title.toLowerCase().includes("puffer"));
        this.loading = false;
      });
  }

  onFavoriteSelected(product: Product): void {
    // Navigate to the details page with the product ID as a parameter
  if (product.liked) {
  this.productService.setSelectedFavorite(product);
  } else {
    null
  }
  }

  getFavourite(product: Product): void {
   // Toggle the liked property of the product
  product.liked = !product.liked;
  if (product.liked) {
    this.productService.incrementsFavorite(1);
    this.onFavoriteSelected(product);
  } else {
    this.productService.removeProductFromWishedProducts(product);
    this.productService.decrementsFavorite(1);
    }
  }

  trackFavourite(index: number, product: any): number {
    return product.id;
  }

  routeToMen() {
    this.router.navigate(["/men"])
  }
}
