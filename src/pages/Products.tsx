/* eslint-disable react-refresh/only-export-components */
import { authApi } from "@/api/axios";
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "@/components/product";
import { type ProductsResponse } from "@/types";

export const loader = async (): Promise<ProductsResponse> => {
  const response = await authApi.get("/products");
  return { ...response.data };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
