import React from "react";

import { FieldProps } from "formik";
import {
  Cascader as RsCascader,
  CascaderProps as RsCascaderProps,
} from "rsuite";

export interface CascaderProps<T>
  extends FieldProps<T>,
    RsCascaderProps<T>,
    Omit<
      React.HTMLAttributes<HTMLElement>,
      "defaultValue" | "placeholder" | "form" | "onChange" | "onSelect"
    > {}

export function Cascader<T extends string | number = string>({
  field,
  form,
  meta,
  onChange,
  ...cascaderProps
}: CascaderProps<T> | any) {
  return (
    <RsCascader
      value={field.value}
      onChange={(newValue, event) => {
        form.setFieldValue(field.name, newValue);
        onChange?.(newValue as T, event);
      }}
      {...cascaderProps}
    />
  );
}
