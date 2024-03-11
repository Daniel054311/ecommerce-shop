import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, count, map, of, throwError } from 'rxjs';
import { Product } from './product-data';

// Declare the 'google' object
declare const google: any;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedProductKey = 'selectedProduct';
  private productCountKey = 'productCount';
  private countFavoriteKey = 'countFavorite';
  private cartProductsKey = 'cartProducts';
  private wishedProductKey = 'wishedProducts';

  selectedProduct: Product | null = null;
  cartProducts: Product[] = [];
  wishedProducts: Product[] = []; // Array to store favorite products

  productCount: number = 0;
  countFavorite: number = 0;
  activeButton: string = '';

  private apiUrl = 'https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}';
  private apiUrl2 = 'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}';




  constructor(private http: HttpClient) {
  this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    const storedProduct = localStorage.getItem(this.selectedProductKey);
    if (storedProduct) {
      this.selectedProduct = JSON.parse(storedProduct);
    }

    const storedCartProducts = localStorage.getItem(this.cartProductsKey);
    if (storedCartProducts) {
      this.cartProducts = JSON.parse(storedCartProducts);
    }

    const storedFavoriteProducts = localStorage.getItem(this.wishedProductKey); // Load favorite products from local storage
    if (storedFavoriteProducts) {
      this.wishedProducts = JSON.parse(storedFavoriteProducts);
    }

    const storedCountFavorite = localStorage.getItem(this.countFavoriteKey);
    if (storedCountFavorite) {
      this.countFavorite = JSON.parse(storedCountFavorite);
    }

    const storedProductCount = localStorage.getItem(this.productCountKey);
    if (storedProductCount) {
      this.productCount = JSON.parse(storedProductCount);
    }
  }


  private updateLocalStorage(): void {
    localStorage.setItem(this.selectedProductKey, JSON.stringify(this.selectedProduct));
    localStorage.setItem(this.cartProductsKey, JSON.stringify(this.cartProducts));
    localStorage.setItem(this.wishedProductKey, JSON.stringify(this.wishedProducts)); // Update favorite products in local storage
    localStorage.setItem(this.countFavoriteKey, JSON.stringify(this.countFavorite));
    localStorage.setItem(this.productCountKey, JSON.stringify(this.productCount));
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
    this.updateLocalStorage();
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
    this.updateLocalStorage();
    }
  }

  // selected favorite
  setSelectedFavorite(product: Product | null): void {
  if (product !== null) {
  this.wishedProducts.push(product);
  this.updateLocalStorage();
  }
  }


  getSelectedFavorite(): Product | null {
    return this.selectedProduct;
  }

  incrementsFavorite(count: number): void {
    this.countFavorite += count;
  // TO STORE THE STATE TO LOCAL STORAGE
  this.updateLocalStorage();
  }

  decrementsFavorite(count: number): void {
  this.countFavorite -= count;
  // TO STORE THE STATE TO LOCAL STORAGE
  this.updateLocalStorage();
  }

  getWishedProducts(): Observable<Product[]> {
  return of(this.wishedProducts).pipe(
  catchError(error => {
        // Handle error, log it, or throw it again
  console.error('Error occurred while fetching wished products:', error);
  return throwError(error); // Rethrow the error for further handling
  })
  );
  }

  removeProductFromWishedProducts(product: Product): void {
    const index = this.wishedProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.wishedProducts.splice(index, 1);
      this.updateLocalStorage();
    }
  }

translatePage(selectedLanguage: string) {
 new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: selectedLanguage}, 'google_translate_element');
  }

  setActiveButton(button: string): void {
    this.activeButton = button;
  }

  getActiveButton(): string {
    return this.activeButton;
  }

}
