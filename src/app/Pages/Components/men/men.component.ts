import { Component } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from '../../Service/Product/product-data';
import { EMPTY, catchError, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MenCategoryComponent } from "../../Shared/men-category/men-category.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { NavbarComponent } from "../../Shared/Navs/navbar/navbar.component";

@Component({
    selector: 'app-men',
    standalone: true,
    templateUrl: './men.component.html',
    styleUrl: './men.component.css',
    imports: [CommonModule, MenCategoryComponent, FooterComponent, NavbarComponent]
})
export class MenComponent {
  products: Product[] = [];

  loading: boolean = false;

  constructor(private productService: ProductService) { }

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

  getFavourite(product: Product): void {
    // Toggle the liked property of the product
    product.liked = !product.liked;
  }
  trackFavourite(index: number, product: any): number {
    return product.id;
  }

}
