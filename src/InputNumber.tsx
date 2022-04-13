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
      // Don't use field.onChange here
      // because event can be other type than change
      // e.g. MouseEvent from stepUp/stepDown button
      //      KeyboardEvent from ArrowUp/ArrowDown keys
      onChange={(newValue: any, event) => {
        const parsed = parseFloat(newValue);

        // Handle target.value as text
        // copied from field.onChange
        // see https://github.com/jaredpalmer/formik/blob/e677bea8181f40e6762fc7e7fb009122384500c6/packages/formik/src/Formik.tsx#L630
        form.setFieldValue(field.name, isNaN(parsed) ? newValue : parsed);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
