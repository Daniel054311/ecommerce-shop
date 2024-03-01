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
        // finalize(() => this.loading = false)
      )
      .subscribe(products => {
        this.products = products.filter(product => product.title.toLowerCase().includes("sneaker"));
        this.loading = false;
      });
  }

  onProductSelect(product: Product): void {
    // Navigate to the details page with the product ID as a parameter
  this.productService.setSelectedProduct(product);
  this.router.navigate(["/details"]);
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
     // Increase or decrease countFavorite based on the liked status
  if (product.liked) {
    this.productService.incrementsFavorite(1);
    this.onFavoriteSelected(product);
  } else {
    this.productService.decrementsFavorite(1);
    this.productService.setSelectedFavorite(null);
    }

  }


  trackFavourite(index: number, product: any): number {
    return product.id;
  }



}
