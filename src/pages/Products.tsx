/* eslint-disable react-refresh/only-export-components */
import type { LoaderFunction } from "react-router-dom";
import { authApi } from "@/api/axios";
import { type ProductsResponse } from "@/types";
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "@/components/product";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponse> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await authApi.get("/products", { params });
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
