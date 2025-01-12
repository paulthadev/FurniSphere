import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

type SelectInputProps = {
  name: string;
  label?: string;
  options: string[];
  defaultValue?: string;
};

function FormSelect({ label, name, defaultValue, options }: SelectInputProps) {
  return (
    <div>
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Select name={name} defaultValue={defaultValue || options[0]}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FormSelect;
