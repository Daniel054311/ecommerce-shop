import { Component } from '@angular/core';
import { Product } from '../../Service/Product/product-data';
import { ProductService } from '../../Service/Product/product.service';
import { EMPTY, catchError, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-limelight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './limelight.component.html',
  styleUrl: './limelight.component.css'
})
export class LimelightComponent {

  products: Product[] = [];
  loading: boolean = false;

  constructor(private router:Router,private productService: ProductService) { }

  ngOnInit(): void {
    this.getLimelight()
    }

  getLimelight(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        catchError(() => EMPTY),
        finalize(() => this.loading = false)
      )
      .subscribe(products => {
        this.products = products.filter(product => product.title.toLowerCase().includes("sneaker"));
        console.log(products)
      });
  }

  getFavourite(product: Product): void {
    // Toggle the liked property of the product
    product.liked = !product.liked;
  }
  trackFavourite(index: number, product: any): number {
    return product.id;
  }

  routeToCombos() {
  this.router.navigate(["/combos"])
  }

}
