import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, throwError } from 'rxjs';
import { Product } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private selectedProductKey = 'selectedProduct';
  selectedProduct: Product | null = null;

  productCount: number = 0

  private apiUrl = 'https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}';
  private apiUrl2 = 'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}';




  constructor(private http: HttpClient) {
  const storedProduct = localStorage.getItem(this.selectedProductKey);
    if (storedProduct) {
      this.selectedProduct = JSON.parse(storedProduct);
    }
    this.productCount = 0;
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
    localStorage.setItem(this.selectedProductKey, JSON.stringify(product));
  }

  getSelectedProduct(): Product | null {
    return this.selectedProduct;
  }

  cartCount(count: number): void {
    this.productCount += count;
  }


}
