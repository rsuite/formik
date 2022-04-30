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
        // Can't use field.onChange here because event can be other types than ChangeEvent
        // e.g. MouseEvent from clicking suggested value options
        //      KeyboardEvent from selecting suggested value options with Enter
        form.setFieldValue(field.name, newValue);
        onChange?.(newValue, event);
      }}
      {...props}
    />
  );
}
