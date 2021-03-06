import React from 'react';

import { FieldProps } from 'formik';
import { Cascader as RsCascader, CascaderProps as RsCascaderProps } from 'rsuite';

export interface CascaderProps<T>
  extends FieldProps<T>,
    RsCascaderProps<T>,
    Omit<
      React.HTMLAttributes<HTMLElement>,
      'defaultValue' | 'placeholder' | 'form' | 'onChange' | 'onSelect'
    > {
  loading?: boolean;
}

export function Cascader<T extends string | number = string>({
  field,
  form,
  meta,
  onChange,

  id,
  'aria-describedby': ariaDescribedby,
  ...selectPickerProps
}: CascaderProps<T>) {
  return (
    <>
      <RsCascader
        value={field.value}
        onChange={(newValue: T, event) => {
          form.setFieldValue(field.name, newValue);
          onChange?.(newValue, event);
        }}
        {...selectPickerProps}
      />
      <input {...field} hidden id={id} aria-describedby={ariaDescribedby} />
    </>
  );
}
