import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError, finalize } from 'rxjs';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from '../../Service/Product/product-data';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../Shared/footer/footer.component";
import { WomenCategoryComponent } from "../../Shared/women-category/women-category.component";
import { Router } from '@angular/router';
import { NavbarComponent } from "../../Shared/Navs/navbar/navbar.component";

@Component({
    selector: 'app-women',
    standalone: true,
    templateUrl: './women.component.html',
    styleUrl: './women.component.css',
    imports: [CommonModule, FooterComponent, WomenCategoryComponent, NavbarComponent]
})
export class WomenComponent implements OnInit{
  products: Product[] = [];

  loading: boolean = false;

  constructor(private router:Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getWomenCategory()
    }

  getWomenCategory(): void {
    this.loading = true;
    this.productService.getProducts()
    .pipe(
    catchError(() => EMPTY),
    finalize(() => this.loading = false)
    )
    .subscribe(products => {
    this.products = products.filter(product => product.title.toLowerCase().includes("women's"));
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
