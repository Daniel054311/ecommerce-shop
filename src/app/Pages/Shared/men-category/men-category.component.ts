import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from '../../Service/Product/product-data';
import { EMPTY, catchError, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './men-category.component.html',
  styleUrl: './men-category.component.css'
})
export class MenCategoryComponent implements OnInit{

  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  loading: boolean = false;
  isFavorite: boolean = false;


  constructor(private router:Router,private productService: ProductService){}

  ngOnInit(): void {
  this.getMenCategory()
  }

  getMenCategory(): void {
  this.loading = true;
  this.productService.getProducts()
  .pipe(
  catchError(() => EMPTY),
        // finalize(() => this.loading = false)
  )
  .subscribe(products => {
  this.products = products.filter(product => !product.title.toLowerCase().includes("women's"));
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

  nextPage(): void {
  if (this.hasNextPage()) {
  this.loading = true;
  this.currentPage++;
  this.getMenCategory();
  }
  }

  prevPage(): void {
  if (this.hasPreviousPage()) {
  this.loading = true;
  this.currentPage--;
  this.getMenCategory();
  }
  }

  hasNextPage(): boolean {
  return (this.currentPage * this.itemsPerPage) < this.products.length;
  }

  hasPreviousPage(): boolean {
  return this.currentPage > 1;
  }

  get paginationVisible(): boolean {
  return this.products.length > this.itemsPerPage;
  }

  get displayedProducts(): Product[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.products.slice(startIndex, endIndex);
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


