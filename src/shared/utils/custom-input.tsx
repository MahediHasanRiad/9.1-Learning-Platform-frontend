import React, { type InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      type = "text",
      labelText,
      multiple = false,
      placeholder = "",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full space-y-2">
        {labelText && (
          <label className="text-md block font-medium">
            {labelText}
          </label>
        )}

        <input
          ref={ref}
          className={`bg-transparent border rounded-md w-full p-1.5 outline-none transition-all ${className}`}
          type={type}
          multiple={multiple}
          placeholder={placeholder}
          {...(type === "file"
            ? { ...props, value: undefined }
            : props)}
        />
      </div>
    );
  }
);

// When you use React.forwardRef, React loses the component name.
// Without displayName, DevTools will show something like: forwardRef
CustomInput.displayName = "CustomInput";

export default CustomInput;