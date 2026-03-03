import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function InputField({
  label = "",
  type = "text",
  id = "",
  placeholder = "",
  ...props
}) {
  return (
    <FieldGroup className="">
      <Field>
        {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
        <Input type={type} id={id} placeholder={placeholder} {...props} />
      </Field>
    </FieldGroup>
  );
}
export default InputField;
