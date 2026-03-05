import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function InputField({
  label = "",
  type = "text",
  id = "",
  placeholder = "",
  ref,
  ...props
}) {
  return (
    <FieldGroup className="">
      <Field>
        {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
        <Input type={type} ref={ref} id={id} placeholder={placeholder} {...props}/>
      </Field>
    </FieldGroup>
  );
}
export default InputField;
