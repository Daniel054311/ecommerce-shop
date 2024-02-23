import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';

@Component({
  selector: 'app-men-category',
  standalone: true,
  imports: [],
  templateUrl: './men-category.component.html',
  styleUrl: './men-category.component.css'
})
export class MenCategoryComponent implements OnInit{

  products: any ;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
  this.productService.getProducts()
  .subscribe(
    data => {
      this.products = data;
      // this.product = data.data.product;
          console.log('Fetched products:', this.products);
        },
        error => {
          console.error('Error fetching products:', error);
        }
      );
  }


//   fetchProducts() {
//     this.productService.getProduct().subscribe(data => {
//       // console.log(data); // Log the entire response object
//       this.product = data.data.product;
//       // console.log( this.product);
//     });
// }

}
