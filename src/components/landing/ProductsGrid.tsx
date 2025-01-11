import { Product } from "@/types";
import { formatAsDollars } from "@/utils";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

function ProductsGrid() {
  const { data: products } = useLoaderData();

  return (
    <div className="grid gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product: Product) => {
        const { id } = product;
        const { title, image, price } = product.attributes;
        const dollarAmount = formatAsDollars(price);

        return (
          <Link to={`/products/${id}`}>
            <Card>
              <CardContent>
                <img
                  src={image}
                  alt={title}
                  className="h-64 w-full rounded-md object-cover md:h-48"
                />

                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold capitalize">{title}</h2>
                  <p className="mt-2 font-light text-primary">{dollarAmount}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
