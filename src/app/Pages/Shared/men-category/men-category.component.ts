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

  constructor(private router:Router,private productService: ProductService){}

  ngOnInit(): void {
  this.getMenCategory()
  }

  getMenCategory(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        catchError(() => EMPTY),
        finalize(() => this.loading = false)
      )
      .subscribe(products => {
        this.products = products.filter(product => !product.title.toLowerCase().includes("women's"));
      });
  }

  // loadProducts(): void {
  //   this.productService.getProducts().subscribe(products => {
  //     this.products = products;
  //   });
  // }

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
  }
  trackFavourite(index: number, product: any): number {
    return product.id;
  }

  routeToMen() {
    this.router.navigate(["/men"])
  }

  }


