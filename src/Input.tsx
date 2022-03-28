import { FieldProps } from 'formik';
import { Input as RsInput, InputProps as RsInputProps } from 'rsuite';

export interface InputProps extends FieldProps<string>, Omit<RsInputProps, 'form'> {}

export function Input({ field, form, meta, onChange, ...props }: InputProps) {
  return (
    <RsInput
      {...field}
      onChange={(newValue, event) => {
        form.setFieldValue(field.name, newValue);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
