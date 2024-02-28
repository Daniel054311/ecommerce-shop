import { Component } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from '../../Service/Product/product-data';
import { Router } from '@angular/router';
import { EMPTY, catchError, finalize } from 'rxjs';
import { FooterComponent } from "../../Shared/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-joggers',
    standalone: true,
    templateUrl: './joggers.component.html',
    styleUrl: './joggers.component.css',
    imports: [FooterComponent,CommonModule]
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

  getFavourite(product: Product): void {
    // Toggle the liked property of the product
    product.liked = !product.liked;
  }
  trackFavourite(index: number, product: any): number {
    return product.id;
  }

  routeToMen() {
    this.router.navigate(["/men"])
  }
}
