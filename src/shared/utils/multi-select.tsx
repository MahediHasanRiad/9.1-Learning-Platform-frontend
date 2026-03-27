import * as React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";

interface MultiSelectProps {
  label?: string;
  items: string[];
  value: any;
  onChange: (value: string[] | string) => void;
}

function MultiSelect({
  label = "Select Frameworks",
  items,
  value,
  onChange,
}: MultiSelectProps) {
  const anchor = useComboboxAnchor();
  const id = React.useId();

  return (
    <div className="grid w-full max-w-xs items-center gap-1.5">
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
      >
        {label}
      </Label>

      <Combobox
        multiple
        autoHighlight
        items={items}
        value={value}
        onValueChange={onChange}

        // defaultValue={[items[0]]}
      >
        <ComboboxChips ref={anchor} className="w-full">
          <ComboboxValue>
            {(values) => (
              <React.Fragment>
                {Array.isArray(values) &&
                  values.map((val) => (
                    <ComboboxChip key={val}>{val}</ComboboxChip>
                  ))}
                <ComboboxChipsInput id={id} placeholder="Select..." />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>

        <ComboboxContent className={"bg-background-0"} anchor={anchor}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export default MultiSelect;
