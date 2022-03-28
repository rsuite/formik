import React from 'react';

import { FieldProps } from 'formik';
import { SelectPicker as RsSelectPicker, SelectPickerProps as RsSelectPickerProps } from 'rsuite';

export interface SelectPickerProps<T>
  extends FieldProps<T>,
    RsSelectPickerProps<T>,
    Omit<
      React.HTMLAttributes<HTMLElement>,
      'defaultValue' | 'placeholder' | 'form' | 'onChange' | 'onSelect'
    > {
  loading?: boolean;
}

export function SelectPicker<T extends string | number = string>({
  field,
  form,
  meta,
  onChange,

  ...selectPickerProps
}: SelectPickerProps<T>) {
  return (
    <>
      <RsSelectPicker<T>
        value={field.value}
        onChange={(newValue, event) => {
          form.setFieldValue(field.name, newValue);
          onChange?.(newValue, event);
        }}
        {...selectPickerProps}
      />
    </>
  );
}
