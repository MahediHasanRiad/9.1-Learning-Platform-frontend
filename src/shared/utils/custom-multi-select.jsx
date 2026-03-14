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
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";

function CustomMultiSelect({
  label,
  value = [],
  itemList = [],
  multiple = true,
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
        multiple = {multiple}
        items = {itemList}
        value = {value}
        onValueChange = {onChange}
        itemToStringValue ={(item) => item?.label ?? ""}
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
                        {item.value}
                      </ComboboxChip>
                    );
                  })}

                <ComboboxChipsInput id={id} placeholder="Add new..." />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>

        {/* Dropdown */}
        <ComboboxContent className="bg-white" anchor={anchor}>
          <ComboboxEmpty>No countries found.</ComboboxEmpty>

          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.id} value={item.id}>
                <Item size="xs" className="p-0">
                  <ItemContent>
                    <ItemTitle className="whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {item.img && (
                          <img
                            src={item.img}
                            alt={item.label}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        )}

                        <span>{item.value}</span>
                      </div>
                    </ItemTitle>

                    {item.description && (
                      <ItemDescription className={'text-[12px]'}>{item.description}</ItemDescription>
                    )}
                  </ItemContent>
                </Item>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export default CustomMultiSelect;
