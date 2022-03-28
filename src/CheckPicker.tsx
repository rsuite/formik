import { FieldProps } from 'formik';
import { CheckPicker as RsCheckPicker, CheckPickerProps as RsCheckPickerProps } from 'rsuite';

import formikCompatible from './formikCompatible';

export interface CheckPickerProps extends FieldProps<string[]>, RsCheckPickerProps<string> {}

export const CheckPicker = formikCompatible(RsCheckPicker);
