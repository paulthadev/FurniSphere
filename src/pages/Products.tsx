/* eslint-disable react-refresh/only-export-components */
import type { LoaderFunctionArgs } from "react-router-dom";
import { authApi } from "@/api/axios";
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "@/components/product";
import { type ProductsResponse } from "@/types";

export const loader = async ({
  request,
}: LoaderFunctionArgs): Promise<ProductsResponse> => {
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
