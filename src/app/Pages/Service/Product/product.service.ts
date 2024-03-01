import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, count, map, throwError } from 'rxjs';
import { Product } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedProductKey = 'selectedProduct';
  private productCountKey = 'productCount';
  private countFavoriteKey = 'countFavorite';
  private cartProductsKey = 'cartProducts';

  selectedProduct: Product | null = null;
  cartProducts: Product[] = [];

  productCount: number = 0;
  countFavorite: number = 0;

  private apiUrl = 'https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}';
  private apiUrl2 = 'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}';




  constructor(private http: HttpClient) {
  const storedProduct = localStorage.getItem(this.selectedProductKey);
  if (storedProduct) {
  this.selectedProduct = JSON.parse(storedProduct);
    }

  const storedCartProducts = localStorage.getItem(this.cartProductsKey);
  if (storedCartProducts) {
  this.cartProducts = JSON.parse(storedCartProducts);
  }

  const storeFavorite = localStorage.getItem(this.countFavoriteKey);
  if (storeFavorite) {
  this.countFavorite = JSON.parse(storeFavorite);
  }

  const storedProductCount = localStorage.getItem(this.productCountKey);
  if (storedProductCount) {
    this.productCount = JSON.parse(storedProductCount);
    }

   }



  getProduct(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl2).pipe(
    map(data => data.data.products.edges
    .map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.title,
    description: edge.node.description,
    price: edge.node.variants.edges[0].node.price,
    imageUrl: edge.node.featuredImage.url
    })))
    );
  }

  setSelectedProduct(product: Product): void {
    this.selectedProduct = product;
    this.cartCount(1);
    this.cartProducts.push(product); // Add the selected product to the cartProducts array
    localStorage.setItem(this.selectedProductKey, JSON.stringify(product));
    localStorage.setItem(this.cartProductsKey, JSON.stringify(this.cartProducts));
  }


  getSelectedProduct(): Product | null {
    return this.selectedProduct;
  }

  cartCount(count: number): void {
    this.productCount += count;
    localStorage.setItem(this.productCountKey, JSON.stringify(this.productCount));
  }

  // A METHOD TO GET ALL THE SAVED CART PRODUCT

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  removeProductFromCart(product: Product): void {
    const index = this.cartProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
    this.cartProducts.splice(index, 1);
    this.productCount--; // Decrease product count
    localStorage.setItem(this.cartProductsKey, JSON.stringify(this.cartProducts)); // Update localStorage
    localStorage.setItem(this.productCountKey, JSON.stringify(this.productCount));
    }
  }

  // selected favorite
  setSelectedFavorite(product: Product |null): void {
    this.selectedProduct = product;
    localStorage.setItem(this.selectedProductKey, JSON.stringify(product));

  }

  getSelectedFavorite(): Product | null {
    return this.selectedProduct;
  }

  incrementsFavorite(count: number): void {
    this.countFavorite += count;
  // TO STORE THE STATE TO LOCAL STORAGE

    // localStorage.setItem(this.selectedFavoriteKey, JSON.stringify(this.countFavorite));
    // localStorage.setItem(this.countFavoriteKey, JSON.stringify(this.countFavorite))
  }

  decrementsFavorite(count: number): void {
  this.countFavorite -= count;
  // TO STORE THE STATE TO LOCAL STORAGE
  // localStorage.setItem(this.selectedFavoriteKey, JSON.stringify(this.countFavorite));
  // localStorage.setItem(this.countFavoriteKey, JSON.stringify(this.countFavorite))
  }


}
