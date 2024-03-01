import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../Service/Product/product-data';
import { ProductService } from '../../Service/Product/product.service';
import { FooterComponent } from "../../Shared/footer/footer.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [RouterLink, FooterComponent]
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  totalAmount: number = 0;

  constructor(private productService:ProductService ){}

  ngOnInit(): void {
  this.getCartProducts();
  }

  getCartProducts() {
    this.cartProducts = this.productService.getCartProducts();
    this.TotalAmount();
  }

  TotalAmount() {
    this.totalAmount = this.cartProducts.reduce((total, product) => {
      // Convert product.price.amount to a number using parseFloat or Number function
      const amount = parseFloat(product.price.amount) || 0; // Use parseFloat to handle cases where product.price.amount is not a valid number
      return total + amount;
    }, 0);
  }

  removeProduct(product: Product): void {
    this.productService.removeProductFromCart(product); // Remove product from cart
    this.getCartProducts(); // Refresh cart products
  }


}
