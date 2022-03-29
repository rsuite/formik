import { FieldProps } from "formik";
import {
  RadioGroup as RsRadioGroup,
  RadioGroupProps as RsRadioGroupProps,
} from "rsuite";

export interface RadioGroupProps extends FieldProps, RsRadioGroupProps {}

export function RadioGroup({
  field,
  form,
  meta,
  onChange,
  ...props
}: RadioGroupProps) {
  return (
    <RsRadioGroup
      {...field}
      onChange={(newValue, event) => {
        field.onChange(event);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
