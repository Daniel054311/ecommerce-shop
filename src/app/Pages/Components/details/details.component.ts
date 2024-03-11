import { Component } from '@angular/core';
import { Product } from '../../Service/Product/product-data';
import { ProductService } from '../../Service/Product/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MenCategoryComponent } from "../../Shared/men-category/men-category.component";
import { FooterComponent } from "../../Shared/footer/footer.component";
import { NavbarComponent } from "../../Shared/Navs/navbar/navbar.component";

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [CommonModule, MenCategoryComponent, FooterComponent, RouterLink, NavbarComponent]
})
export class DetailsComponent {
  selectedProduct: Product | null = null;
  loading: boolean = false;
  selectedSize: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.getSelectedProduct();
  }

  getSelectedProduct() {
    this.selectedProduct = this.productService.getSelectedProduct();

  }

  changeBgColor(size: string) {
    this.selectedSize = size;
    alert('Selected Size: ' + this.selectedSize);
  }

  isSizeSelected(size: string): boolean {
    return this.selectedSize === size;
  }

}
