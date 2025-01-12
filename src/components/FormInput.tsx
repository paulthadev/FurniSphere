import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
};

function FormInput({ name, defaultValue, type, label }: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} id={name} defaultValue={defaultValue} />
    </div>
  );
}

export default FormInput;
