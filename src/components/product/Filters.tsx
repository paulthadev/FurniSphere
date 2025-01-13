import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "../ui/button";
import {
  FormCheckbox,
  FormInput,
  FormRange,
  FormSelect,
} from "@/components/form";

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;
  const { categories, companies } = meta;

  return (
    <Form className="grid items-center gap-4 rounded-md border px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <FormInput
        name="search"
        label="search product"
        type="text"
        defaultValue={search}
      />

      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        options={categories}
        defaultValue={category}
      />

      {/* COMPANY */}
      <FormSelect
        label="select company"
        name="company"
        options={companies}
        defaultValue={company}
      />

      {/* ORDER */}
      <FormSelect
        label="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />

      {/* RANGE */}
      <FormRange label="price" name="price" defaultValue={price} />

      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="free shipping"
        defaultValue={shipping}
      />

      {/* SEARCH BUTTON */}
      <Button type="submit" className="mb-2 self-end" size="sm">
        Search
      </Button>

      {/* RESET BUTTON */}
      <Button
        type="button"
        asChild
        variant="outline"
        size="sm"
        className="mb-2 self-end"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
}

export default Filters;
