import { Form, Link, useLoaderData } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Filters() {
  const { params } = useLoaderData();
  const { search } = params;
  return (
    <Form className="grid items-center gap-4 rounded-md border px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="mb-2">
        <Label htmlFor="search">Search Product</Label>
        <Input type="text" name="search" id="search" defaultValue={search} />
      </div>

      <Button type="submit" className="mb-2 self-end" size="sm">
        Search
      </Button>

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
