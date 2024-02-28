import { Component } from '@angular/core';
import { Product } from '../../Service/Product/product-data';
import { ProductService } from '../../Service/Product/product.service';
import { EMPTY, catchError, finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women-category',
  standalone: true,
  imports: [],
  templateUrl: './women-category.component.html',
  styleUrl: './women-category.component.css'
})
export class WomenCategoryComponent {
  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  loading: boolean = false;

  constructor(private router:Router ,private productService: ProductService){}

  ngOnInit(): void {
  this.getWomenCategory()
  }

  getWomenCategory(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        catchError(() => EMPTY),
        // finalize(() => this.loading = false)
      )
      .subscribe(products => {
        this.products = products.filter(product => product.title.toLowerCase().includes("women's"));
        this.loading = false;
      });
  }


onProductSelect(product: Product): void {
    // Navigate to the details page with the product ID as a parameter
    this.productService.setSelectedProduct(product);
    this.router.navigate(["/details"]);
    console.log(product)
  }

  nextPage(): void {
    if (this.hasNextPage()) {
    this.loading = true;
      this.currentPage++;
      this.getWomenCategory();
    }
  }

  prevPage(): void {
    if (this.hasPreviousPage()) {
      this.loading = true;
      this.currentPage--;
      this.getWomenCategory();
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


  }


