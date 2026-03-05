import React from "react";

const CustomInput = React.forwardRef(
  (
    {
      type = "text",
      labelText,
      multiple = false,
      placeholder = "",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full space-y-2">
        {labelText && (
          <label className="text-md block font-medium">{labelText}</label>
        )}
        <input
          ref={ref}
          className={`bg-transparent border rounded-md w-full p-1.5 outline-none transition-all ${className}`}
          type={type}
          multiple={multiple}
          placeholder={placeholder}
          {...(type === "file" ? { ...props, value: undefined } : props)}
        />
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
