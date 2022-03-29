import { FieldProps } from "formik";
import { Toggle as RsToggle, ToggleProps as RsToggleProps } from "rsuite";

export interface ToggleProps extends FieldProps<boolean>, RsToggleProps {}

export function Toggle({ field, meta, form, onChange, ...props }: ToggleProps) {
  return (
    <RsToggle
      name={field.name}
      checked={field.value}
      onChange={(checked, event) => {
        // todo Use field.onChange once rsuite Toggle event is fixed
        form.setFieldValue(field.name, checked);
        onChange?.(checked, event);
      }}
      {...props}
    />
  );
}
