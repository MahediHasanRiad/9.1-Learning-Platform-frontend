import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectField({ label, items = [], placeholder = "Select items..", onChange }) {
  return (
    <div className="w-full space-y-2">
      {label && <p className="font-semibold">{label}</p>}
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>Fruits</SelectLabel> */}
            {items.map((item) => (
              <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectField;
