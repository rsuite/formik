/**
 * 将 rsuite 的表单组件转换为 formik 适配
 * @example
 *
 * const FormikInput = formikCompatible(RSuiteInput);
 */
import React from 'react';

import { FieldProps } from 'formik';

export interface RSuiteStyleControlledComponentProps {
  name?: string;
  value?: any;
  onChange?: (newValue: any, ...args: any[]) => void;
}

function formikCompatible<P extends RSuiteStyleControlledComponentProps, WP = FieldProps & P>(
  Component: React.ComponentType<P>
): React.ComponentType<WP>;

function formikCompatible(Component: React.ComponentType<any>): any {
  function WrappedComponent({
    field,
    meta,
    form,
    onChange,
    ...props
  }: FieldProps & RSuiteStyleControlledComponentProps) {
    return (
      <Component
        {...field}
        onChange={(newValue: any, ...args: any[]) => {
          form.setFieldValue(field.name, newValue);
          onChange?.(newValue, ...args);
        }}
        {...props}
      />
    );
  }

  WrappedComponent.displayName = `formikCompatible(${Component.displayName ?? Component.name})`;

  return WrappedComponent;
}

export default formikCompatible;
