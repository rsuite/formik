import { FieldProps } from 'formik';
import { InputNumber as RsInputNumber, InputNumberProps as RsInputNumberProps } from 'rsuite';

export interface InputNumberProps extends FieldProps<string>, Omit<RsInputNumberProps, 'form'> {}

export function InputNumber({ field, form, meta, onChange, ...props }: InputNumberProps) {
  return (
    <RsInputNumber
      {...field}
      onChange={(newValue: any, event) => {
        form.setFieldValue(field.name, newValue);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
