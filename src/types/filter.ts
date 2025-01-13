import { ProductsResponse } from "./";

export type Params = {
  search?: string;
  category?: string;
  order?: string;
  price?: string;
  page?: number;
  shipping?: string;
};

export type ProductResponseWithParams = ProductsResponse & { params: Params };
