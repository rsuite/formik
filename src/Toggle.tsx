import { FieldProps } from 'formik';
import { Toggle as RsToggle, ToggleProps as RsToggleProps } from 'rsuite';

export interface ToggleProps extends FieldProps<boolean>, RsToggleProps {}

export function Toggle({ field, meta, form, ...props }: ToggleProps) {
  return (
    <RsToggle
      name={field.name}
      checked={field.value}
      onChange={(checked) => form.setFieldValue(field.name, checked)}
      {...props}
    />
  );
}
