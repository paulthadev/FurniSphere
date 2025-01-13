import { Slider } from "@/components/ui/slider";
import { Label } from "../ui/label";
import { useState } from "react";
import { formatAsDollars } from "@/utils";

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

function FormRange({ label, name, defaultValue }: FormRangeProps) {
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? +defaultValue : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

  return (
    <div className="mb-2 self-end">
      <Label className="flex justify-between capitalize" htmlFor={name}>
        {label || name}
        <span>{formatAsDollars(selectedPrice)}</span>
      </Label>

      <Slider
        className="mt-4"
        id={name}
        name={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectedPrice(value[0])}
      />
    </div>
  );
}

export default FormRange;
