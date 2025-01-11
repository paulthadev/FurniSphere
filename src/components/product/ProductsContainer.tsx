import { useLoaderData } from "react-router-dom";
import ProductsList from "./ProductsList";
import { type ProductsResponse } from "@/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { LayoutGrid, List } from "lucide-react";
import { Separator } from "../ui/separator";
import { ProductsGrid } from "../landing";

function ProductsContainer() {
  const [layout, setLayout] = useState<"list" | "grid">("grid");
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="mt-8 flex items-center justify-between">
          <h4 className="font-medium capitalize">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>

          <div className="flex gap-x-4">
            <Button
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
            >
              <LayoutGrid />
            </Button>

            <Button
              onClick={() => setLayout("list")}
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
            >
              <List />
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mt-4" />

      {/* PRODUCT */}
      <div>
        {totalProducts === 0 ? (
          <h2 className="my-24 text-center text-xl font-medium">
            Sorry, no product matched your search..
          </h2>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
