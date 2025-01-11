import { Button } from "@/components/ui/button";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-bold text-primary">{error.status}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page {error.statusText}
          </h1>
          <p className="mt-6 text-xl font-medium">
            Sorry, we couldn't not find the page you're looking for.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary">
              <Link to="/">Go back home</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center px-8">
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        There was an error...
      </h1>
    </main>
  );
}

export default Error;
