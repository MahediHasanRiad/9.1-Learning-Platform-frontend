import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const MultiSelectField = React.forwardRef(
  (
    { label, options, value, onChange, placeholder = "Select...", ...props },
    ref,
  ) => {
    // react-select send object, so convert it in a value
    const selectedValue = options.filter((option) =>
      Array.isArray(value) ? value.includes(option.value) : false,
    );

    const handleChange = (selectedOptions) => {
      // to send only value => ['sat', 'sun']
      onChange(selectedOptions ? selectedOptions.map((o) => o.value) : []);
    };

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label className="text-sm">{label}</label>}
        <Select
          {...props}
          ref={ref}
          isMulti
          options={options}
          value={selectedValue}
          onChange={handleChange}
          placeholder={placeholder}
          components={animatedComponents}
          closeMenuOnSelect={true}
          // css
          styles={{
            control: (base, state) => ({
              ...base,
              color: state.isSelected ? "white" : "black",
              backgroundColor: 'transparent',
              border: '1px solid black',
              borderRadius: '7px',
              "&:active": {
                border: "1px solid black",
              },
            }),
            menu: (base) => ({
              ...base,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#22c55e22" : "transparent",
            }),
            multiValue: (base) => ({
              ...base,
              borderRadius: "0.5rem",
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: "black",
            }),
          }}
        />
      </div>
    );
  },
);

MultiSelectField.displayName = "MultiSelectField";

export default MultiSelectField;
