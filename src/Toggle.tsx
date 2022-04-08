import { FieldProps } from "formik";
import { Toggle as RsToggle, ToggleProps as RsToggleProps } from "rsuite";

export interface ToggleProps extends FieldProps<boolean>, RsToggleProps {}

export function Toggle({ field, meta, form, onChange, ...props }: ToggleProps) {
  return (
    <RsToggle
      name={field.name}
      checked={field.value}
      onChange={(checked, event) => {
        field.onChange(event);
        onChange?.(checked, event);
      }}
      {...props}
    />
  );
}
