

// product.interface.ts

export interface ProductData {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: {
      cursor: string;
      node: {
        id: string;
        title: string;
        image: {
          url: string;
        };
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
}


export interface Product {
liked: any;
  id: string;
  title: string;
  description: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  imageUrl: string;
}
