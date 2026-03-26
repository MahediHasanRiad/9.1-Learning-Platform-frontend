import * as React from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type InputFieldProps = React.ComponentProps<typeof Input> & {
  label?: string;
};

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, id, type = "text", placeholder, ...props }, ref) => {
    return (
      <FieldGroup>
        <Field>
          {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
          <Input
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            {...props}
          />
        </Field>
      </FieldGroup>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;