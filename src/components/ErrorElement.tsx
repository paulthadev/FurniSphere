import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="grid min-h-min place-items-center">
      <h4 className="text-4xl font-bold">There was an error</h4>
    </div>
  );
}

export default ErrorElement;
