import { FieldProps } from 'formik';
import { Checkbox as RsCheckbox, CheckboxProps as RsCheckboxProps } from 'rsuite';

export interface CheckboxProps extends FieldProps<boolean>, RsCheckboxProps {}

export function Checkbox({ field, meta, form, ...props }: CheckboxProps) {
  return (
    <RsCheckbox
      name={field.name}
      checked={field.value}
      onChange={(value, checked) => form.setFieldValue(field.name, checked)}
      {...props}
    />
  );
}
