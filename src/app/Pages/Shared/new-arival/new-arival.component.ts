import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/Product/product.service';
import { ProductData } from '../../Service/Product/product-data';

@Component({
  selector: 'app-new-arival',
  standalone: true,
  imports: [],
  templateUrl: './new-arival.component.html',
  styleUrl: './new-arival.component.css'
})
export class NewArivalComponent implements OnInit {

  product: ProductData | undefined;

constructor(private productService: ProductService) { }

ngOnInit(): void {
  this.fetchProducts();
}
  fetchProducts() {
    this.productService.getProduct().subscribe(data => {
      // console.log(data); // Log the entire response object
      this.product = data.data.product;
      // console.log( this.product);
    });
}


}
