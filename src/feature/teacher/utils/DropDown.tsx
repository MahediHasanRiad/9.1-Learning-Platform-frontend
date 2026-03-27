import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropDownType {
  title: string;
  label?: string;
  items: string[];
  value?: string;
  onChange?: (item: string) => void 
}

function Dropdown({ title, label, items = [], value, onChange }: DropDownType) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {value ? value : title} <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}

          {items.map((item, index) => (
            <DropdownMenuItem key={index} onClick={() => onChange?.(item)}>
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
