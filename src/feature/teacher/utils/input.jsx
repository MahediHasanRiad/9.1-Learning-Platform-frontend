import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function InputField({ label = "", type = 'text', id = "", placeholder}) {
  return (
    <FieldGroup className="">
      <Field>
        {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
        <Input type={type} id={id} placeholder={placeholder} />
      </Field>
    </FieldGroup>
  );
}
export default InputField;
