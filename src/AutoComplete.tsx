import { FieldProps } from "formik";
import {
  AutoComplete as RsAutoComplete,
  AutoCompleteProps as RsAutoCompleteProps,
} from "rsuite";

export interface AutoCompleteProps
  extends FieldProps<string>,
    RsAutoCompleteProps {}

export function AutoComplete({
  field,
  form,
  meta,
  onChange,
  ...props
}: AutoCompleteProps) {
  return (
    <RsAutoComplete
      {...field}
      onChange={(newValue, event) => {
        field.onChange(event);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
