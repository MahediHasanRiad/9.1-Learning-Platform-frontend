import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function InputField({label = '', id = '', placeholder, desciption = '', value = ''}) {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="input-invalid">{label}</FieldLabel>
      <Input id={id} placeholder={placeholder} value= {value}/>
      <FieldDescription>
        {desciption}
      </FieldDescription>
      
    </Field>
  )
}

export default InputField