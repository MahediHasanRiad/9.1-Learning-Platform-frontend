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

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Label } from "@/components/ui/label";

function CustomMultiSelect({
  label,
  value = [],
  itemList = [],
  onChange,
  id = "customSelect",
}) {
  const anchor = useComboboxAnchor();

  const getAllItems = (val) => itemList.find((c) => c.value === val);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium mb-1">
        {label}
      </Label>

      <Combobox
        multiple
        items={itemList}
        value={value}
        onValueChange={onChange}
        itemToStringValue={(item) => item?.label ?? ""}
      >
        {/* Selected Chips */}
        <ComboboxChips ref={anchor} className="w-full border rounded-md p-1">
          <ComboboxValue>
            {(selectedValues) => (
              <>
                {Array.isArray(selectedValues) &&
                  selectedValues.map((val) => {
                    const item = getAllItems(val);
                    if (!item) return null;

                    return (
                      <ComboboxChip key={val} value={val}>
                        {item.label}
                      </ComboboxChip>
                    );
                  })}

                <ComboboxChipsInput id={id} placeholder="Search countries..." />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>

        {/* Dropdown */}
        <ComboboxContent className="bg-white" anchor={anchor}>
          <ComboboxEmpty>No countries found.</ComboboxEmpty>

          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.id} value={item.value}>
                <div className="flex items-center gap-2">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-6 h-6 rounded-full object-cover"
                  />

                  <span>{item.label}</span>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export default CustomMultiSelect;
