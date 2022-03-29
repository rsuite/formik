import { FieldProps } from "formik";
import {
  CheckboxGroup as RsCheckboxGroup,
  CheckboxGroupProps as RsCheckboxGroupProps,
} from "rsuite";

export interface CheckboxGroupProps extends FieldProps, RsCheckboxGroupProps {}

export function CheckboxGroup({
  field,
  form,
  meta,
  onChange,
  ...props
}: CheckboxGroupProps) {
  return (
    <RsCheckboxGroup
      {...field}
      onChange={(newValue, event) => {
        field.onChange(event);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
