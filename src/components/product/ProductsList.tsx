import { ProductsResponse } from "@/types";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { formatAsDollars } from "@/utils";

function ProductsList() {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id } = product;
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatAsDollars(price);

        return (
          <>
            <Link key={id} to={`/products/${id}`}>
              <Card>
                <CardContent className="grid gap-y-4 p-8 md:grid-cols-3">
                  <img
                    src={image}
                    alt={`image-${id}`}
                    className="h-64 w-full rounded-md object-cover md:h-48 md:w-48"
                  />
                  <div>
                    <h2 className="text-xl font-semibold capitalize">
                      {title}
                    </h2>
                    <h4>{company}</h4>
                  </div>
                  <p className="text-primary md:ml-auto">{dollarsAmount}</p>
                </CardContent>
              </Card>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default ProductsList;
