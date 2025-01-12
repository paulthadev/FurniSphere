/* eslint-disable react-refresh/only-export-components */
import type { LoaderFunction } from "react-router-dom";
import { authApi } from "@/api/axios";
import { type ProductResponseWithParams } from "@/types";
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "@/components/product";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await authApi.get("/products", { params });
  return { ...response.data, params };
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
