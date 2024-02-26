import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Product, ProductData } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = 'https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}';
  private apiUrl2 = 'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}';




  constructor(private http: HttpClient) { }
  // getAllProducts(): Observable<ProductData[]> {
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map((response: any) => {

  //       if (response && response.data && response.data.product) {
  //         const productData = response.data.product;
  //         return [{
  //           ...productData,
  //           variants: productData.variants.edges.map((edge: any) => edge.node)
  //         }];
  //       } else {
  //         console.error('Invalid response data structure:', response);
  //         return [];
  //       }
  //     })
  //   );
  // }
  // getAllProducts(): Observable<ProductData[]> {
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map((response: any) => {
  //       if (response && response.data && response.data.product) {
  //         const productData = response.data.product;
  //         const mappedProduct: ProductData = {
  //           title: productData.title,
  //           description: productData.description,
  //           featuredImage: productData.featuredImage,
  //           variants: productData.variants.edges.map((edge: any) => edge.node),
  //           d: ''
  //         };
  //         return [mappedProduct];
  //       } else {
  //         console.error('Invalid response data structure:', response);
  //         return [];
  //       }
  //     })
  //   );
  // }
  getProduct(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl2);
  // }

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

}
