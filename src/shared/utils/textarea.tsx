import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

interface TextareaType {
  label?: string;
  placeholder?: string;
}

function TextareaField({
  label,
  placeholder = "Type your message here.",
}: TextareaType) {
  return (
    <Field>
      {label && <FieldLabel htmlFor="textarea-message">{label}</FieldLabel>}
      {/* <FieldDescription>Enter your message below.</FieldDescription> */}
      <Textarea id="textarea-message" placeholder={placeholder} />
    </Field>
  );
}

export default TextareaField
