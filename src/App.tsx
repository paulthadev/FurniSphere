import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className=" font-bold grid place-content-center h-screen">
      Welcome to FurniSphere
      <Button
        variant="default"
        size="sm"
        onClick={() => console.log("clicked")}
      >
        Click Here
      </Button>
    </div>
  );
}

export default App;
