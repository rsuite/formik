import { FieldProps } from "formik";
import {
  InputNumber as RsInputNumber,
  InputNumberProps as RsInputNumberProps,
} from "rsuite";

export interface InputNumberProps
  extends FieldProps<string>,
    Omit<RsInputNumberProps, "form"> {}

export function InputNumber({
  field,
  form,
  meta,
  onChange,
  ...props
}: InputNumberProps) {
  return (
    <RsInputNumber
      {...field}
      onChange={(newValue: any, event) => {
        field.onChange(event);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
