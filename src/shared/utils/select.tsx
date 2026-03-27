import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOption {
  id: string;
  name: string;
}

interface SelectFieldProps {
  label?: string;
  items?: SelectOption[];
  placeholder?: string;
  onChange: (value: string) => void;
}

function SelectField({
  label,
  items = [],
  placeholder = "Select items..",
  onChange,
}: SelectFieldProps) {
  return (
    <div className="w-full space-y-2">
      {label && <p className="font-semibold">{label}</p>}
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectField;