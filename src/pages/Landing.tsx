/* eslint-disable react-refresh/only-export-components */
import { type LoaderFunction } from "react-router-dom";
import { authApi } from "@/api/axios";
import { Hero, FeaturedProduct } from "@/components/landing";
import { type ProductsResponse } from "@/types";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const featuredProductUrl = "/products?featured=true";
  const response = await authApi.get<ProductsResponse>(featuredProductUrl);
  return { ...response.data };
};

function Landing() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
    </div>
  );
}

export default Landing;
