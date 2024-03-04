import { Component, OnInit } from '@angular/core';
import { Product } from '../../Service/Product/product-data';
import { ProductService } from '../../Service/Product/product.service';
import { EMPTY, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './favorite-dropdown.component.html',
  styleUrl: './favorite-dropdown.component.css'
})
export class FavoriteDropdownComponent implements OnInit{
  wishedProducts: Product[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private router:Router,private productService: ProductService) { }

  ngOnInit(): void {

  this.getWishedProducts()

  }

  getWishedProducts(): void {
    this.loading = true;
    this.productService.getWishedProducts()
      .pipe(
        catchError((error) => {
          this.loading = false;
          this.error = 'Failed to load wished products. Please try again later.';
          console.error('Error occurred while fetching wished products:', error);
          return EMPTY;
        })
      )
      .subscribe((products: Product[]) => {
        this.loading = false;
        this.wishedProducts = products;
        console.log(this.wishedProducts)
      });
  }


  onProductSelect(product: Product): void {
    // Navigate to the details page with the product ID as a parameter
  this.productService.setSelectedProduct(product);
  this.router.navigate(["/details"]);
  }

}
