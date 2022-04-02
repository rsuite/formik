import { FieldProps } from "formik";
import {
  Checkbox as RsCheckbox,
  CheckboxProps as RsCheckboxProps,
} from "rsuite";

export interface CheckboxProps extends FieldProps<boolean>, RsCheckboxProps {}

export function Checkbox({
  field,
  meta,
  form,
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <RsCheckbox
      name={field.name}
      checked={field.value}
      onChange={(value, checked, event) => {
        field.onChange(event);
        onChange?.(value, checked, event);
      }}
      {...props}
    />
  );
}
